import { act, useState } from "react";
import Inter from "./Inter";
import Profiles from "./Profiles";
import Settings from "./Settings";

export default TabForm = () => {
  const [activeTabs, setActiveTabs] = useState(0);

  const [data, setData] = useState({
    name: "Karthikeya",
    age: "20",
    email: "karthikeyavempala@gmail.com",
    interests: ["Movies", "Music"],
    theme: "dark",
  });

  const tabs = [
    {
      name: "Profile",
      component: Profiles,
    },
    {
      name: "Interests",
      component: Inter,
    },
    {
      name: "Settings",
      component: Settings,
    },
  ];

  const ActiveTabComponent = tabs[activeTabs].component;
  const handleNextClick = () => {
    setActiveTabs((prev) => prev + 1);
  };

  const handlePrevClicke = () => {
    setActiveTabs((prev) => prev - 1);
  };

  const handleSubmit = () => {
    console.log(data);
  };
  return (
    <div>
      <div className="heading-container">
        {tabs.map((t, index) => (
          <div
            key={index}
            className="heading"
            onClick={() => setActiveTabs(index)}
          >
            {t.name}
          </div>
        ))}
      </div>

      <div className="tab-body">
        <ActiveTabComponent data={data} setData={setData} />
      </div>

      <div>
        {activeTabs > 0 && <button onClick={handlePrevClicke}>Prev</button>}
        {activeTabs < tabs.length - 1 && (
          <button onClick={handleNextClick}>Next</button>
        )}
        {tabs[activeTabs].name === "Settings" && (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
};
