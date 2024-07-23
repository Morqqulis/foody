import React, { FC, useState } from 'react';
import Modal from './Modal';

interface AddOfferModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (offer: any) => void;
}

const AddOfferModal: FC<AddOfferModalProps> = ({ isOpen, onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    const newOffer = {
      id: Date.now(),
      title,
      description,
      image: image ? URL.createObjectURL(image) : '',
    };
    onSave(newOffer);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-xl font-bold mb-4">Add Offer</h2>
      <div className="mb-4">
        <label className="block text-gray-400 mb-1">Upload Image</label>
        <input type="file" onChange={handleImageUpload} className="w-full px-3 py-2 bg-gray-700 rounded" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-400 mb-1">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 bg-gray-700 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-400 mb-1">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-3 py-2 bg-gray-700 rounded"
        />
      </div>
      <div className="flex justify-end">
        <button
          onClick={onClose}
          className="bg-gray-600 text-white px-4 py-2 rounded mr-2 hover:bg-gray-500"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
        >
          Create Offer
        </button>
      </div>
    </Modal>
  );
};

export default AddOfferModal;
