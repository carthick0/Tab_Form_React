const Interests = ({ data, setData }) => {
  const { interests } = data;
  const handleChange = (e, name) => {
    setData((prevState) => ({
      ...prevState,
      interests: e.target.checked
        ? [...prevState.interests, e.target.name]
        : prevState.interests.filter((i) => i !== e.target.name),
    }));
  };
  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            name="Music"
            checked={interests.includes("Music")}
            onChange={handleChange}
          />
          Music
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="Movies"
            checked={interests.includes("Movies")}
            onChange={handleChange}
          />
          Movies
        </label>
      </div>
    </div>
  );
};

export default Interests;
