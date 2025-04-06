import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define the user type
interface User {
    id: string;
    name: string;
    email: string;
    role: 'admin' | 'superadmin' | 'turf_owner' | 'user';
    phone?: string;
    address?: string;
    profileImage?: string;
}

// Define the auth context type
interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    isAuthenticated: boolean;
    loading: boolean;
}

// Create the context with default values
const AuthContext = createContext<AuthContextType>({
    user: null,
    login: async () => {},
    logout: () => {},
    isAuthenticated: false,
    loading: true,
});

// Create the provider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    // Check for existing session on mount
    useEffect(() => {
        const checkAuth = async () => {
            try {
                // Here you would typically check for a stored token or session
                // and validate it with your backend
                const storedUser = localStorage.getItem('user');
                if (storedUser) {
                    setUser(JSON.parse(storedUser));
                }
            } catch (error) {
                console.error('Auth check failed:', error);
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);

    const login = async (email: string, password: string) => {
        try {
            // Here you would typically make an API call to your backend
            // For now, we'll simulate a successful login
            const mockUser: User = {
                id: '1',
                name: 'John Doe',
                email: email,
                role: 'user',
                phone: '+1234567890',
                address: '123 Main St',
                profileImage: '/default-avatar.png'
            };

            setUser(mockUser);
            localStorage.setItem('user', JSON.stringify(mockUser));
        } catch (error) {
            console.error('Login failed:', error);
            throw error;
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                logout,
                isAuthenticated: !!user,
                loading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the auth context
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export default AuthContext; 