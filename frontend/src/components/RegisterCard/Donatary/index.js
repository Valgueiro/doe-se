import { useState, useEffect } from "react";
import FirstRegisterPhase from "./FirstRegisterPhase";
import SecondRegisterPhase from "./SecondRegisterPhase";
import Loading from "../Loading";
import SuccessfulRegister from "../SuccessfulRegister";
import RegisterError from "../RegisterError";
import fire from "../../../config/firebase";

const Donatary = () => {
  // phase 1 (first) collects name, age, bloodType, rhFactor, hospital and bloodBank
  // phase 2 (second) collects description and photo
  const [registerPhase, setRegisterPhase] = useState("first");
  const [registerData, setRegisterData] = useState({});

  const apiPostDonatary = async () => {
    try {
      // will handle this later
      registerData.photo = "";
      await fire.firestore().collection("requirements").add(registerData);
      setRegisterPhase("SuccessfulRegister");
      setRegisterData({});
    } catch (error) {
      setRegisterPhase("registerError");
      setRegisterData({});
      console.log("Erro na função apiPostDonatary() do componente Donatary");
      console.log(error);
    }
  };

  const updateRegisterData = (data) => {
    setRegisterData({ ...registerData, ...data });
  };

  useEffect(() => {
    if (registerPhase === "loading") {
      apiPostDonatary();
    }
  }, [registerPhase]);

  if (registerPhase === "first") {
    return (
      <FirstRegisterPhase
        setRegisterPhase={setRegisterPhase}
        updateRegisterData={updateRegisterData}
      />
    );
  } else if (registerPhase === "second") {
    return (
      <SecondRegisterPhase
        setRegisterPhase={setRegisterPhase}
        updateRegisterData={updateRegisterData}
      />
    );
  } else if (registerPhase === "loading") {
    return <Loading />;
  } else if (registerPhase === "registerError") {
    return <RegisterError />;
  }

  return <SuccessfulRegister />;
};

export default Donatary;
