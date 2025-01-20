import { StudiesList } from './components/StudiesList';

function App() {
    const studies = [
        { patientId: 1, name: 'Anonym', analysis: 'mdbrain Tumor' },
        { patientId: 2, name: 'Anna_Longi', analysis: 'mdbrain Aneursym' },
        { patientId: 3, name: 'Unknown', analysis: 'mdprostate' },
        { patientId: 4, name: 'Unknown', analysis: 'mdknee' },
    ];

    return <StudiesList studies={studies} />;
}

export default App;
