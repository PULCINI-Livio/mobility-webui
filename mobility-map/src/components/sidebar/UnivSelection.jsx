const univList = ["Univ A", "Univ B", "Univ C"];

export default function UnivSelection() {
  return (
    <div>
        <h1>Universities Selection</h1>
        <ul>
        {univList.map((name, index) => (
            <li key={index}>{name}</li>
        ))}
        </ul>
    </div>
  );
}