import React, { useState } from 'react';

const TournamentAction = () => {
    // Form state
    const [formData, setFormData] = useState({
        name: '',
        sport: '',
        startDate: '',
        location: '',
        prizePool: '',
        maxParticipants: '',
        image: null,
        description: ''
    });

    // Validation errors state
    const [errors, setErrors] = useState({
        name: '',
        sport: '',
        startDate: '',
        location: '',
        prizePool: '',
        maxParticipants: '',
        image: '',
        description: ''
    });

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user types
        setErrors(prev => ({
            ...prev,
            [name]: ''
        }));
    };

    // Handle file input
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        setFormData(prev => ({
            ...prev,
            image: file
        }));
        setErrors(prev => ({
            ...prev,
            image: ''
        }));
    };

    // Validate form
    const validateForm = () => {
        const newErrors = {
            name: !formData.name ? 'Tournament name is required' : '',
            sport: !formData.sport ? 'Please select a sport' : '',
            startDate: !formData.startDate ? 'Start date is required' : '',
            location: !formData.location ? 'Location is required' : '',
            prizePool: !formData.prizePool ? 'Prize pool is required' : '',
            maxParticipants: !formData.maxParticipants ? 'Maximum participants is required' : '',
            image: !formData.image ? 'Tournament image is required' : '',
            description: !formData.description ? 'Description is required' : ''
        };
        setErrors(newErrors);
        return !Object.values(newErrors).some(error => error);
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (validateForm()) {
            // TODO: Handle form submission (API call, etc.)
            console.log('Form submitted:', formData);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#727af9]/20 to-pink-100/20">
            <div className="max-w-7xl mx-auto px-6 py-8 pt-32">
                <div className="bg-white rounded-3xl p-8 shadow-xl">
                    <h1 className="text-[32px] font-semibold text-[#1f1f1f] mb-8">Create Tournament</h1>
                    
                    <form className="space-y-8" onSubmit={handleSubmit}>
                        {/* Basic Information */}
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <label className="block text-gray-700 mb-2">Tournament Name <span className="text-red-500">*</span></label>
                                <input 
                                    type="text" 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-2.5 border ${errors.name ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-[#727af9]`}
                                    placeholder="Enter tournament name"
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">Sport <span className="text-red-500">*</span></label>
                                <select 
                                    name="sport"
                                    value={formData.sport}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-2.5 border ${errors.sport ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-[#727af9]`}
                                >
                                    <option value="">Select sport</option>
                                    <option value="football">Football</option>
                                    <option value="cricket">Cricket</option>
                                    <option value="basketball">Basketball</option>
                                    <option value="tennis">Tennis</option>
                                </select>
                                {errors.sport && <p className="text-red-500 text-sm mt-1">{errors.sport}</p>}
                            </div>
                        </div>

                        {/* Date and Location */}
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <label className="block text-gray-700 mb-2">Start Date <span className="text-red-500">*</span></label>
                                <input 
                                    type="date" 
                                    name="startDate"
                                    value={formData.startDate}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-2.5 border ${errors.startDate ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-[#727af9]`}
                                />
                                {errors.startDate && <p className="text-red-500 text-sm mt-1">{errors.startDate}</p>}
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">Location <span className="text-red-500">*</span></label>
                                <input 
                                    type="text" 
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-2.5 border ${errors.location ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-[#727af9]`}
                                    placeholder="Enter venue location"
                                />
                                {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
                            </div>
                        </div>

                        {/* Prize and Participants */}
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <label className="block text-gray-700 mb-2">Prize Pool <span className="text-red-500">*</span></label>
                                <input 
                                    type="text" 
                                    name="prizePool"
                                    value={formData.prizePool}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-2.5 border ${errors.prizePool ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-[#727af9]`}
                                    placeholder="Enter prize amount"
                                />
                                {errors.prizePool && <p className="text-red-500 text-sm mt-1">{errors.prizePool}</p>}
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">Max Participants <span className="text-red-500">*</span></label>
                                <input 
                                    type="number" 
                                    name="maxParticipants"
                                    value={formData.maxParticipants}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-2.5 border ${errors.maxParticipants ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-[#727af9]`}
                                    placeholder="Enter maximum number of teams"
                                />
                                {errors.maxParticipants && <p className="text-red-500 text-sm mt-1">{errors.maxParticipants}</p>}
                            </div>
                        </div>

                        {/* Tournament Image */}
                        <div>
                            <label className="block text-gray-700 mb-2">Tournament Image <span className="text-red-500">*</span></label>
                            <input 
                                type="file" 
                                accept="image/*"
                                onChange={handleFileChange}
                                className={`w-full px-4 py-2.5 border ${errors.image ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-[#727af9]`}
                            />
                            {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-gray-700 mb-2">Description <span className="text-red-500">*</span></label>
                            <textarea 
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className={`w-full px-4 py-2.5 border ${errors.description ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-[#727af9]`}
                                rows={4}
                                placeholder="Enter tournament description"
                            ></textarea>
                            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-end gap-4">
                            <button 
                                type="button"
                                className="px-6 py-2.5 border border-gray-200 text-gray-700 rounded-full hover:bg-gray-50 transition-colors"
                            >
                                Cancel
                            </button>
                            <button 
                                type="submit"
                                className="px-6 py-2.5 bg-[#727af9] text-white rounded-full hover:bg-[#5c64d8] transition-colors"
                            >
                                Create Tournament
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}   

export default TournamentAction;