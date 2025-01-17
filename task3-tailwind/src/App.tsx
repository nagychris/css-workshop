import { useState } from 'react';
import { Card } from './components/Card';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            // TODO render some kind of list of cards with some dummy data
            <Card />
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setCount(count + 1)}
            >
                +
            </button>
        </div>
    );
}

export default App;
