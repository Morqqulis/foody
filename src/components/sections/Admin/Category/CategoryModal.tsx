"use client";

import { FC, useState, useEffect } from "react";

interface CategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (category: { id?: number; name: string; slug: string }) => void;
  category?: { id: number; name: string; slug: string };
}

const CategoryModal: FC<CategoryModalProps> = ({ isOpen, onClose, onSave, category }) => {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");

  useEffect(() => {
    if (category) {
      setName(category.name);
      setSlug(category.slug);
    }
  }, [category]);

  if (!isOpen) return null;

  const handleSave = () => {
    onSave({ id: category?.id, name, slug });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#232836] p-6 rounded-md w-[600px]">
        <h3 className="text-lg font-bold mb-4 text-white">{category ? "Edit Category" : "Add Category"}</h3>
        <div className="mb-4">
          <label className="text-white">Upload Image</label>
          <div className="border-dashed border-2 border-gray-400 py-4 flex justify-center items-center mt-2">
            <button className="bg-pink-500 text-white py-2 px-4 rounded-md">Upload</button>
          </div>
        </div>
        <div className="mb-4">
          <label className="text-white">Edit your category information</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-2 p-2 rounded-md bg-[#383D4D] text-white"
            placeholder="Name"
          />
          <input
            type="text"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="w-full mt-2 p-2 rounded-md bg-[#383D4D] text-white"
            placeholder="Slug"
          />
        </div>
        <div className="flex justify-end">
          <button onClick={onClose} className="bg-gray-700 text-white py-2 px-4 rounded-md mr-2">
            Cancel
          </button>
          <button onClick={handleSave} className="bg-pink-500 text-white py-2 px-4 rounded-md">
            {category ? "Update Category" : "Create Category"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;
