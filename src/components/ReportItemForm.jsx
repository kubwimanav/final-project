import { useState } from "react";
import { Camera, Upload, X, AlertCircle } from "lucide-react";

function ReportItemForm({ type, onClose }) {
  const formTitle = type === "lost" ? "Report Lost Item" : "Report Found Item";
  const [image, setImage] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreviewURL(URL.createObjectURL(file));
    }
  };

  const removeImage = () => {
    setImage(null);
    if (previewURL) {
      URL.revokeObjectURL(previewURL);
      setPreviewURL(null);
    }
  };

  return (
    <div>
      <form className="flex flex-col">
        {/* Form content area */}
        <div className="p-1">
          {/* Row with two inputs: Item Name and Category */}
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            {/* Item Name */}
            <div className="flex-1">
              <label className="font-medium text-gray-700 block mb-1">
                Item Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="What is the item?"
                required
              />
            </div>

            {/* Category */}
            <div className="flex-1">
              <label className="font-medium text-gray-700 block mb-1">
                Category <span className="text-red-500">*</span>
              </label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all appearance-none bg-white"
                required
              >
                <option value="">Select</option>
                <option value="electronics">Electronics</option>
                <option value="accessories">Accessories</option>
                <option value="books">Books & Notes</option>
                <option value="cards">ID Cards & Documents</option>
                <option value="keys">Keys</option>
                <option value="clothing">Clothing</option>
                <option value="bags">Bags & Luggage</option>
                <option value="jewelry">Jewelry</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Row with two inputs: Location and Date */}
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            {/* Location */}
            <div className="flex-1">
              <label className="font-medium text-gray-700 block mb-1">
                Location <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder={`Where ${type === "lost" ? "lost" : "found"}?`}
                required
              />
            </div>

            {/* Date */}
            <div className="flex-1">
              <label className="font-medium text-gray-700 block mb-1">
                Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                required
              />
            </div>
          </div>

          {/* Row with two inputs: Contact Email and Phone */}
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            {/* Contact Email */}
            <div className="flex-1">
              <label className="font-medium text-gray-700 block mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Your email address"
                required
              />
            </div>

            {/* Phone Number */}
            <div className="flex-1">
              <label className="font-medium text-gray-700 block mb-1">
                Phone
              </label>
              <input
                type="tel"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Optional contact number"
              />
            </div>
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="font-medium text-gray-700 block mb-1">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              rows="3"
              placeholder="Describe the item with distinguishing features, colors, brands, etc."
              required
            ></textarea>
          </div>

          {/* Photo Upload */}
          <div className="mb-2">
            <label className="font-medium text-gray-700 block mb-1">
              Photo Upload
            </label>

            {!previewURL ? (
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-500 transition-all">
                <label className="cursor-pointer block w-full">
                  <Upload className="mx-auto h-2 w-8 text-gray-400" />
                  <span className="mt-2 block text-sm font-medium text-gray-700">
                    Click to upload an image
                  </span>
                  <span className="mt-1 block text-xs text-gray-500">
                    PNG, JPG up to 5MB
                  </span>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </label>
              </div>
            ) : (
              <div className="relative border rounded-lg overflow-hidden">
                <img
                  src={previewURL}
                  alt="Preview"
                  className="w-full h-48 object-cover"
                />
                <button
                  type="button"
                  onClick={removeImage}
                  className="absolute top-2 right-2 bg-gray-800 bg-opacity-70 rounded-full p-1 text-white hover:bg-opacity-100 transition-all"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
            <p className="text-xs text-gray-500 mt-1">
              A clear photo increases chances of finding your item
            </p>
          </div>
        </div>

        {/* Form buttons */}
        <div className="border-t border-gray-200 p-4 bg-gray-50">
          <div className="flex flex-col-reverse sm:flex-row sm:justify-between gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center"
            >
              Submit Report
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ReportItemForm;
