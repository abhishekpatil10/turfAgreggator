import { Link } from 'react-router-dom';

interface TurfCardProps {
    id: string;
    name: string;
    location: string;
    price: number;
    image: string;
}

const TurfCard = ({ id, name, location, price, image }: TurfCardProps) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={image} alt={name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{name}</h3>
                <p className="text-gray-600 mb-2">{location}</p>
                <p className="text-lg font-semibold text-blue-600">₹{price}/hour</p>
                <Link
                    to={`/booking/${id}`}
                    className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                    Book Now
                </Link>
            </div>
        </div>
    );
};

export default TurfCard;
