import React, { useState } from "react";

function SettingsComponent() {
  // State tanımlamaları
  const [setting1, setSetting1] = useState(false);
  const [setting2, setSetting2] = useState(false);
  const [setting3, setSetting3] = useState(false);
  const [setting4, setSetting4] = useState(false);
  const [setting5, setSetting5] = useState(false);

  // Ayar durumu değiştikçe çağrılacak fonksiyonlar
  const handleSetting1Change = () => setSetting1(!setting1);
  const handleSetting2Change = () => setSetting2(!setting2);
  const handleSetting3Change = () => setSetting3(!setting3);
  const handleSetting4Change = () => setSetting4(!setting4);
  const handleSetting5Change = () => setSetting5(!setting5);

  return (
    <div>
      <label className="flex relative">Job fuction :</label>

      <div className="ml-36 mb-2 flex w-72">
        <input
          type="checkbox"
          checked={setting1}
          onChange={handleSetting1Change}
        />
        <label className="text-lg">Campaign Management</label>
      </div>

      <div className="ml-36 mb-2 flex w-72">
        <input
          type="checkbox"
          checked={setting2}
          onChange={handleSetting2Change}
        />
        <label className="text-lg">CRM Administration</label>
      </div>

      <div className="ml-36 mb-2 flex w-72">
        <input
          type="checkbox"
          checked={setting3}
          onChange={handleSetting3Change}
        />
        <label className="text-lg">Email Deployment</label>
      </div>

      <div className="ml-36 mb-2 flex w-72">
        <input
          type="checkbox"
          checked={setting4}
          onChange={handleSetting4Change}
        />
        <label className="text-lg">Partner</label>
      </div>

      <div className="ml-36 mb-2 flex w-72">
        <input
          type="checkbox"
          checked={setting5}
          onChange={handleSetting5Change}
        />
        <label className="text-lg">Employee</label>
      </div>
    </div>
  );
}

export default SettingsComponent;
