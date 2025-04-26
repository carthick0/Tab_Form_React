const Profile = ({ data, setData }) => {
  const { name, age, email } = data;
  const handleChange = (e, item) => {
    setData((prevState) => ({
      ...prevState,
      [item]: e.target.value,
    }));
  };
  return (
    <div>
      <div className="container-input">
        <label>Name :</label>
        <input
          className="input"
          type="text"
          value={name}
          onChange={(e) => handleChange(e, "name")}
        />
      </div>
      <div className="container-input">
        <label>Age :</label>
        <input
          type="number"
          value={age}
          onChange={(e) => handleChange(e, "age")}
        />
      </div>
      <div className="container-input">
        <label>Email :</label>
        <input
          type="text"
          value={email}
          onChange={(e) => handleChange(e, "email")}
        />
      </div>
    </div>
  );
};

export default Profile;
