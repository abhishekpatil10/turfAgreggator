import { useState, useEffect } from 'react';
import { FaUserAlt, FaBuilding, FaCheckCircle, FaUsers, FaTrophy } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

type UserRole = 'PLAYER' | 'TURF_OWNER' | null;

interface BaseFormData {
  email: string;
  phone: string;
  password: string;
}

interface PlayerFormData extends BaseFormData {
  fullName: string;  // Full name only for players
}

interface TurfOwnerFormData extends BaseFormData {
  businessName: string;
}

const Register = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [selectedRole, setSelectedRole] = useState<UserRole>(null);
    const [formData, setFormData] = useState<PlayerFormData | TurfOwnerFormData | null>(null);
    const [errors, setErrors] = useState<Partial<PlayerFormData & TurfOwnerFormData>>({});
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(true);
    const [showPassword, setShowPassword] = useState(false);

    const handleRoleSelect = (role: UserRole) => {
        setSelectedRole(role);
        setStep(2);
        // Initialize form data based on role
        if (role === 'PLAYER') {
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                password: '',
            } as PlayerFormData);
        } else if (role === 'TURF_OWNER') {
            setFormData({
                businessName: '',
                email: '',
                phone: '',
                password: '',
            } as TurfOwnerFormData);
        }
    };

    const validateForm = () => {
        const newErrors: Partial<PlayerFormData & TurfOwnerFormData> = {};
        
        // Player-specific validations
        if (selectedRole === 'PLAYER' && !(formData as PlayerFormData)?.fullName?.trim()) {
            newErrors.fullName = "Full name is required";
        }

        // Turf owner specific validation
        if (selectedRole === 'TURF_OWNER' && !(formData as TurfOwnerFormData)?.businessName?.trim()) {
            newErrors.businessName = "Business name is required";
        }

        // Common validations
        if (!formData?.email) {
            newErrors.email = "Email address is required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!formData?.phone) {
            newErrors.phone = "Phone number is required";
        } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/[^\d]/g, ''))) {
            newErrors.phone = "Please enter a valid 10-digit phone number";
        }

        if (!formData?.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 8) {
            newErrors.password = "Password must be at least 8 characters";
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(formData.password)) {
            newErrors.password = "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validateForm()) {
            setStep(step + 1);
        }
    };

    const handleSuccess = async () => {
        // Show success message
        setIsSuccess(true);
        
        // After 2 seconds, navigate
        setTimeout(() => {
            navigate('/');
        }, 2000);
    };

    useEffect(() => {
        if (step === 3) {
            handleSuccess();
        }
    }, [step]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#727af9]/20 to-pink-100/20 flex">
            {/* Left side illustration */}
            <div className="hidden md:flex w-1/2 bg-[#727af9] items-center justify-center p-8">
                <div className="max-w-md">
                    {/* Company Logo */}
                    <div className="mb-8">
                        <img 
                            src="https://placehold.co/200x80?text=Company+Logo" 
                            alt="Registration" 
                            className="max-w-[200px] h-auto"
                        />
                    </div>

                    {/* Benefits List - Updated colors */}
                    <div className="space-y-6 text-white">
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                <FaCheckCircle className="w-4 h-4" />
                            </div>
                            <div>
                                <h3 className="font-semibold">Instant Matches</h3>
                                <p className="text-sm opacity-90">Find players and teams quickly</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                <FaUsers className="w-4 h-4" />
                            </div>
                            <div>
                                <h3 className="font-semibold">Community Events</h3>
                                <p className="text-sm opacity-90">Join tournaments and local leagues</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                <FaTrophy className="w-4 h-4" />
                            </div>
                            <div>
                                <h3 className="font-semibold">Rewards Program</h3>
                                <p className="text-sm opacity-90">Earn points and exclusive benefits</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right side content */}
            <div className="w-full md:w-1/2 p-8 flex flex-col">
                {/* Updated Stepper Header */}
                <div className="w-full max-w-3xl mx-auto mb-8">
                    <div className="flex items-center justify-between relative">
                        {/* Progress Line */}
                        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -z-1">
                            <div 
                                className="h-1 bg-[#727af9] transition-all duration-300"
                                style={{ width: `${((step - 1) / 2) * 100}%` }}
                            ></div>
                        </div>
                        
                        {/* Steps */}
                        {[1, 2, 3].map((stepNumber) => (
                            <div 
                                key={stepNumber}
                                className={`relative flex flex-col items-center ${
                                    step >= stepNumber ? 'text-[#727af9]' : 'text-gray-400'
                                }`}
                            >
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                                    step > stepNumber 
                                        ? 'bg-[#727af9] border-[#727af9] text-white'
                                        : step === stepNumber
                                        ? 'border-[#727af9] bg-white text-[#727af9]'
                                        : 'border-gray-200 bg-white text-gray-400'
                                }`}>
                                    {step > stepNumber ? '✓' : stepNumber}
                                </div>
                                <div className="absolute top-12 w-32 text-center text-sm font-medium text-[#1f1f1f]">
                                    {stepNumber === 1 ? 'Choose Role' : stepNumber === 2 ? 'Basic Info' : 'Verification'}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {step === 1 && (
                    <div className="flex-1 flex flex-col justify-center">
                        <h1 className="text-2xl font-bold mb-6 text-center text-[#1f1f1f]">Choose Your Role</h1>

                        <div className="space-y-6 max-w-md mx-auto w-full">
                            <button
                                onClick={() => handleRoleSelect('PLAYER')}
                                className="w-full p-6 border-2 border-gray-200 rounded-xl hover:border-[#727af9] transition-all duration-300 flex items-start group bg-white"
                            >
                                <div className="mr-4 p-3 bg-[#727af9]/10 rounded-lg group-hover:bg-[#727af9] transition-colors">
                                    <FaUserAlt className="w-6 h-6 text-[#727af9] group-hover:text-white" />
                                </div>
                                <div className="text-left">
                                    <h2 className="text-xl font-semibold text-[#1f1f1f] mb-1">Find a Turf</h2>
                                    <p className="text-gray-600">Book and play at available turfs</p>
                                </div>
                            </button>

                            <button
                                onClick={() => handleRoleSelect('TURF_OWNER')}
                                className="w-full p-6 border-2 border-gray-200 rounded-xl hover:border-[#727af9] transition-all duration-300 flex items-start group bg-white"
                            >
                                <div className="mr-4 p-3 bg-[#727af9]/10 rounded-lg group-hover:bg-[#727af9] transition-colors">
                                    <FaBuilding className="w-6 h-6 text-[#727af9] group-hover:text-white" />
                                </div>
                                <div className="text-left">
                                    <h2 className="text-xl font-semibold text-[#1f1f1f] mb-1">List Your Turf</h2>
                                    <p className="text-gray-600">Register as a turf owner</p>
                                </div>
                            </button>

                            <div className="text-center mt-8">
                                <p className="text-gray-600">
                                    Already have an account?{' '}
                                    <a href="/login" className="text-[#727af9] hover:text-[#5457E5] font-medium">
                                        Login
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {step === 2 && formData && (
                    <div className="basic-info-form flex-1 flex flex-col max-w-xl mx-auto w-full">
                        <h1 className="text-2xl font-bold mb-6 text-[#1f1f1f]">Basic Information</h1>
                        
                        <div className="space-y-4">
                            {selectedRole === 'PLAYER' && (
                                <div>
                                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-600 mb-1">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        placeholder="Enter your full name"
                                        value={(formData as PlayerFormData).fullName || ''}
                                        onChange={(e) => {
                                            setFormData({...formData, fullName: e.target.value} as PlayerFormData);
                                            if (errors.fullName) setErrors({...errors, fullName: undefined});
                                        }}
                                        className="w-full px-4 py-3 rounded-lg border bg-white text-[#1f1f1f] border-gray-200 focus:outline-none focus:border-[#727af9] transition-all duration-200"
                                    />
                                    {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
                                </div>
                            )}

                            {selectedRole === 'TURF_OWNER' && (
                                <div>
                                    <label htmlFor="businessName" className="block text-sm font-medium text-gray-600 mb-1">
                                        Business Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="businessName"
                                        placeholder="Enter your business name"
                                        value={(formData as TurfOwnerFormData).businessName || ''}
                                        onChange={(e) => setFormData({
                                            ...formData,
                                            businessName: e.target.value
                                        } as TurfOwnerFormData)}
                                        className="w-full px-4 py-3 rounded-lg border bg-white text-[#1f1f1f] border-gray-200 focus:outline-none focus:border-[#727af9] transition-all duration-200"
                                    />
                                    {errors.businessName && <p className="mt-1 text-sm text-red-500">{errors.businessName}</p>}
                                </div>
                            )}

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="your.email@example.com"
                                    value={formData.email}
                                    onChange={(e) => {
                                        setFormData({...formData, email: e.target.value});
                                        if (errors.email) setErrors({...errors, email: undefined});
                                    }}
                                    className="w-full px-4 py-3 rounded-lg border bg-white text-[#1f1f1f] border-gray-200 focus:outline-none focus:border-[#727af9] transition-all duration-200"
                                />
                                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-600 mb-1">
                                    Phone Number *
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    placeholder="Enter 10-digit mobile number"
                                    value={formData.phone}
                                    onChange={(e) => {
                                        const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                                        setFormData({...formData, phone: value});
                                        if (errors.phone) setErrors({...errors, phone: undefined});
                                    }}
                                    className="w-full px-4 py-3 rounded-lg border bg-white text-[#1f1f1f] border-gray-200 focus:outline-none focus:border-[#727af9] transition-all duration-200"
                                />
                                {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-1">
                                    Password *
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        placeholder="Enter your password"
                                        value={formData.password}
                                        onChange={(e) => {
                                            setFormData({...formData, password: e.target.value});
                                            if (errors.password) setErrors({...errors, password: undefined});
                                        }}
                                        className="w-full px-4 py-3 rounded-lg border bg-white text-[#1f1f1f] border-gray-200 focus:outline-none focus:border-[#727af9] transition-all duration-200"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                    >
                                        {showPassword ? (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                            </svg>
                                        ) : (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                                {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
                                <p className="mt-1 text-xs text-gray-500">
                                    Password must be at least 8 characters long and contain uppercase, lowercase, number, and special character
                                </p>
                            </div>
                        </div>
                        
                        <div className="mt-8 flex justify-between">
                            <button
                                onClick={() => setStep(1)}
                                className="px-6 py-2.5 border border-gray-200 text-gray-700 rounded-full hover:bg-gray-50 transition-colors"
                            >
                                Back
                            </button>
                            <button
                                onClick={handleNext}
                                className="px-6 py-2.5 bg-[#1f1f1f] text-white rounded-full hover:bg-black/80 transition-colors"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="flex-1 flex items-center justify-center">
                        {isSuccess && (
                            <div className="text-center">
                                <div className="mb-8">
                                    <svg 
                                        className="mx-auto h-24 w-24 text-[#727af9]" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth={2} 
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                                        >
                                            <animate
                                                attributeName="stroke-dasharray"
                                                from="0 100"
                                                to="100 100"
                                                dur="1s"
                                                fill="freeze"
                                            />
                                        </path>
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-bold text-white mb-2">
                                    Registration Successful!
                                </h2>
                                <p className="text-gray-600">
                                    {selectedRole === 'PLAYER' 
                                        ? "Welcome to our platform!" 
                                        : "Welcome! You can now start listing your turfs."}
                                </p>
                            </div>
                        )}
                        {isLoading && (
                            <div className="text-center flex flex-col items-center justify-center">
                                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mb-4"></div>
                                <h2 className="text-xl font-semibold text-gray-800">Setting up your account...</h2>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Register;