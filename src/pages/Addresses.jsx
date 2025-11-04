import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Plus, Edit, Trash2, Home, Building, ArrowLeft, Save, X } from 'lucide-react';
import ProfileSidebar from '../components/ProfileSidebar';
import Toast from '../components/Toast';

const Addresses = () => {
  const navigate = useNavigate();
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      label: 'Casa',
      type: 'home',
      street: 'Rua das Flores, 123',
      complement: 'Apto 45',
      neighborhood: 'Centro',
      city: 'São Paulo',
      state: 'SP',
      zipCode: '01234-567',
      isDefault: true,
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [toast, setToast] = useState(null);

  const [formData, setFormData] = useState({
    label: '',
    type: 'home',
    street: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
    zipCode: '',
    isDefault: false,
  });

  const handleOpenModal = (address = null) => {
    if (address) {
      setEditingAddress(address);
      setFormData(address);
    } else {
      setEditingAddress(null);
      setFormData({
        label: '',
        type: 'home',
        street: '',
        complement: '',
        neighborhood: '',
        city: '',
        state: '',
        zipCode: '',
        isDefault: addresses.length === 0,
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingAddress(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingAddress) {
      // Update
      setAddresses((prev) =>
        prev.map((addr) => (addr.id === editingAddress.id ? { ...formData, id: addr.id } : addr))
      );
      setToast({
        type: 'success',
        message: {
          title: '✅ Endereço Atualizado!',
          description: 'O endereço foi atualizado com sucesso.',
        },
      });
    } else {
      // Create
      const newAddress = {
        ...formData,
        id: Date.now(),
      };

      // Se for padrão, remover padrão dos outros
      if (newAddress.isDefault) {
        setAddresses((prev) =>
          prev.map((addr) => ({ ...addr, isDefault: false })).concat(newAddress)
        );
      } else {
        setAddresses((prev) => [...prev, newAddress]);
      }

      setToast({
        type: 'success',
        message: {
          title: '✅ Endereço Adicionado!',
          description: 'Novo endereço cadastrado com sucesso.',
        },
      });
    }

    handleCloseModal();
  };

  const handleDelete = (id) => {
    if (window.confirm('Tem certeza que deseja excluir este endereço?')) {
      setAddresses((prev) => prev.filter((addr) => addr.id !== id));
      setToast({
        type: 'success',
        message: {
          title: '🗑️ Endereço Removido',
          description: 'O endereço foi excluído com sucesso.',
        },
      });
    }
  };

  const handleSetDefault = (id) => {
    setAddresses((prev) =>
      prev.map((addr) => ({
        ...addr,
        isDefault: addr.id === id,
      }))
    );
    setToast({
      type: 'success',
      message: {
        title: '✅ Endereço Padrão Alterado',
        description: 'Este endereço agora é o padrão.',
      },
    });
  };

  return (
    <>
      {toast && <Toast type={toast.type} message={toast.message} onClose={() => setToast(null)} />}

      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <button
              onClick={() => navigate('/perfil')}
              className="flex items-center gap-2 text-gray-600 hover:text-dark-900 mb-4 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Voltar</span>
            </button>
            <h1 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-2">
              Meus Endereços
            </h1>
            <p className="text-gray-600">Gerencie seus endereços de entrega</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <ProfileSidebar />
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Add Button */}
              <button
                onClick={() => handleOpenModal()}
                className="btn-primary w-full sm:w-auto mb-6 flex items-center justify-center gap-2"
              >
                <Plus className="w-5 h-5" />
                Adicionar Novo Endereço
              </button>

              {/* Addresses Grid */}
              {addresses.length === 0 ? (
                <div className="bg-white rounded-xl shadow-md p-12 text-center">
                  <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Nenhum endereço cadastrado
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Adicione um endereço para facilitar suas compras
                  </p>
                  <button
                    onClick={() => handleOpenModal()}
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    <Plus className="w-5 h-5" />
                    Adicionar Endereço
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {addresses.map((address) => (
                    <div
                      key={address.id}
                      className={`bg-white rounded-xl shadow-md p-6 relative ${
                        address.isDefault ? 'ring-2 ring-dark-900' : ''
                      }`}
                    >
                      {address.isDefault && (
                        <div className="absolute top-4 right-4 bg-dark-900 text-white text-xs font-bold px-2 py-1 rounded">
                          PADRÃO
                        </div>
                      )}

                      <div className="flex items-start gap-3 mb-4">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          {address.type === 'home' ? (
                            <Home className="w-5 h-5 text-gray-600" />
                          ) : (
                            <Building className="w-5 h-5 text-gray-600" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">{address.label}</h3>
                          <p className="text-sm text-gray-600">{address.street}</p>
                          {address.complement && (
                            <p className="text-sm text-gray-600">{address.complement}</p>
                          )}
                          <p className="text-sm text-gray-600">
                            {address.neighborhood}, {address.city} - {address.state}
                          </p>
                          <p className="text-sm text-gray-600">CEP: {address.zipCode}</p>
                        </div>
                      </div>

                      <div className="flex gap-2 pt-4 border-t">
                        {!address.isDefault && (
                          <button
                            onClick={() => handleSetDefault(address.id)}
                            className="flex-1 text-sm font-medium text-dark-700 hover:text-dark-900 transition-colors"
                          >
                            Tornar Padrão
                          </button>
                        )}
                        <button
                          onClick={() => handleOpenModal(address)}
                          className="flex-1 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors flex items-center justify-center gap-1"
                        >
                          <Edit className="w-4 h-4" />
                          Editar
                        </button>
                        <button
                          onClick={() => handleDelete(address.id)}
                          className="flex-1 text-sm font-medium text-red-600 hover:text-red-700 transition-colors flex items-center justify-center gap-1"
                        >
                          <Trash2 className="w-4 h-4" />
                          Excluir
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-heading font-bold text-gray-900">
                  {editingAddress ? 'Editar Endereço' : 'Novo Endereço'}
                </h2>
                <button
                  onClick={handleCloseModal}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome do Endereço *
                    </label>
                    <input
                      type="text"
                      value={formData.label}
                      onChange={(e) => setFormData({ ...formData, label: e.target.value })}
                      className="input-field"
                      placeholder="Ex: Casa, Trabalho"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tipo</label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="input-field"
                    >
                      <option value="home">Casa</option>
                      <option value="work">Trabalho</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Rua e Número *
                    </label>
                    <input
                      type="text"
                      value={formData.street}
                      onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                      className="input-field"
                      placeholder="Rua das Flores, 123"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Complemento
                    </label>
                    <input
                      type="text"
                      value={formData.complement}
                      onChange={(e) => setFormData({ ...formData, complement: e.target.value })}
                      className="input-field"
                      placeholder="Apto 45"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bairro *
                    </label>
                    <input
                      type="text"
                      value={formData.neighborhood}
                      onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                      className="input-field"
                      placeholder="Centro"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">CEP *</label>
                    <input
                      type="text"
                      value={formData.zipCode}
                      onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                      className="input-field"
                      placeholder="00000-000"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cidade *
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="input-field"
                      placeholder="São Paulo"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">UF *</label>
                    <input
                      type="text"
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="input-field"
                      placeholder="SP"
                      maxLength="2"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="isDefault"
                    checked={formData.isDefault}
                    onChange={(e) => setFormData({ ...formData, isDefault: e.target.checked })}
                    className="w-4 h-4 text-dark-900 border-gray-300 rounded focus:ring-dark-600"
                  />
                  <label htmlFor="isDefault" className="text-sm text-gray-700">
                    Tornar este endereço como padrão
                  </label>
                </div>

                <div className="flex gap-3 pt-4">
                  <button type="submit" className="btn-primary flex-1 flex items-center justify-center gap-2">
                    <Save className="w-5 h-5" />
                    {editingAddress ? 'Salvar Alterações' : 'Adicionar Endereço'}
                  </button>
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="btn-outline flex-1"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Addresses;
