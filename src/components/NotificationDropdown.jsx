import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Bell,
  Package,
  Tag,
  Star,
  Heart,
  X,
  Check,
  Trash2,
} from 'lucide-react';
import { useNotifications } from '../context/NotificationsContext';

const NotificationDropdown = ({ isOpen, onClose }) => {
  const {
    getUnreadNotifications,
    getAllNotifications,
    markAsRead,
    markAllAsRead,
    removeNotification,
    clearRead,
    getRelativeTime,
  } = useNotifications();

  const dropdownRef = useRef(null);
  const [showAll, setShowAll] = React.useState(false);

  const unreadNotifications = getUnreadNotifications();
  const allNotifications = getAllNotifications();
  const displayNotifications = showAll ? allNotifications : unreadNotifications;

  // Fechar ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const getIcon = (iconName) => {
    const icons = {
      Package,
      Tag,
      Star,
      Heart,
      Bell,
    };
    return icons[iconName] || Bell;
  };

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: 'bg-blue-100',
        text: 'text-blue-600',
        icon: 'bg-blue-500',
      },
      green: {
        bg: 'bg-green-100',
        text: 'text-green-600',
        icon: 'bg-green-500',
      },
      yellow: {
        bg: 'bg-yellow-100',
        text: 'text-yellow-600',
        icon: 'bg-yellow-500',
      },
      red: {
        bg: 'bg-red-100',
        text: 'text-red-600',
        icon: 'bg-red-500',
      },
      purple: {
        bg: 'bg-purple-100',
        text: 'text-purple-600',
        icon: 'bg-purple-500',
      },
    };
    return colors[color] || colors.blue;
  };

  const handleNotificationClick = (notification) => {
    if (!notification.read) {
      markAsRead(notification.id);
    }
    onClose();
  };

  const handleRemove = (e, notificationId) => {
    e.preventDefault();
    e.stopPropagation();
    removeNotification(notificationId);
  };

  return (
    <div
      ref={dropdownRef}
      className="absolute right-0 mt-2 w-96 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50 animate-fadeIn"
    >
      {/* Header */}
      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
            <Bell className="w-5 h-5" />
            Notificações
          </h3>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-200 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowAll(false)}
            className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
              !showAll
                ? 'bg-dark-900 text-white'
                : 'text-gray-600 hover:bg-gray-200'
            }`}
          >
            Não Lidas ({unreadNotifications.length})
          </button>
          <button
            onClick={() => setShowAll(true)}
            className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
              showAll
                ? 'bg-dark-900 text-white'
                : 'text-gray-600 hover:bg-gray-200'
            }`}
          >
            Todas ({allNotifications.length})
          </button>
        </div>
      </div>

      {/* Notifications List */}
      <div className="max-h-96 overflow-y-auto">
        {displayNotifications.length === 0 ? (
          <div className="px-4 py-12 text-center">
            <Bell className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500 font-medium">
              {showAll ? 'Nenhuma notificação' : 'Nenhuma notificação não lida'}
            </p>
            <p className="text-sm text-gray-400 mt-1">
              Você está em dia! 🎉
            </p>
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {displayNotifications.map((notification) => {
              const Icon = getIcon(notification.icon);
              const colors = getColorClasses(notification.color);

              return (
                <Link
                  key={notification.id}
                  to={notification.link}
                  onClick={() => handleNotificationClick(notification)}
                  className={`block px-4 py-3 hover:bg-gray-50 transition-colors relative ${
                    !notification.read ? 'bg-blue-50/50' : ''
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {/* Icon */}
                    <div
                      className={`w-10 h-10 ${colors.icon} rounded-lg flex items-center justify-center flex-shrink-0`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <p className="font-semibold text-gray-900 text-sm">
                          {notification.title}
                        </p>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-1" />
                        )}
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                        {notification.message}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400">
                          {getRelativeTime(notification.createdAt)}
                        </span>
                        <button
                          onClick={(e) => handleRemove(e, notification.id)}
                          className="p-1 hover:bg-red-100 rounded transition-colors"
                          title="Remover"
                        >
                          <X className="w-4 h-4 text-gray-400 hover:text-red-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>

      {/* Footer Actions */}
      {displayNotifications.length > 0 && (
        <div className="bg-gray-50 px-4 py-3 border-t border-gray-200">
          <div className="flex items-center gap-2">
            {!showAll && unreadNotifications.length > 0 && (
              <button
                onClick={() => {
                  markAllAsRead();
                }}
                className="flex-1 py-2 px-3 bg-dark-900 text-white rounded-lg text-sm font-medium hover:bg-dark-950 transition-colors flex items-center justify-center gap-2"
              >
                <Check className="w-4 h-4" />
                Marcar Todas como Lidas
              </button>
            )}
            {showAll && (
              <button
                onClick={clearRead}
                className="flex-1 py-2 px-3 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors flex items-center justify-center gap-2"
              >
                <Trash2 className="w-4 h-4" />
                Limpar Lidas
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;
