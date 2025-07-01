import React, { useState } from "react";
import {
  FaHeartbeat,
  FaSmile,
  FaFrown,
  FaExclamationTriangle,
  FaSun,
  FaMoon,
} from "react-icons/fa";

export default function App() {
  const [weight, setWeight] = useState("");
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const calculateBMI = () => {
    if (!weight || !heightFt || heightIn === "") {
      alert("Please enter valid weight and height");
      return;
    }

    const totalInches = parseInt(heightFt) * 12 + parseFloat(heightIn);
    const heightInMeters = totalInches * 0.0254;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    setBmi(bmiValue);
    setStatus(getBMIStatus(bmiValue));
  };

  const getBMIStatus = (bmi) => {
    if (bmi < 18.5) return "Underweight";
    else if (bmi < 24.9) return "Normal";
    else if (bmi < 29.9) return "Overweight";
    else return "Obese";
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Underweight":
        return <FaExclamationTriangle className="text-yellow-300 mr-2" />;
      case "Normal":
        return <FaSmile className="text-green-300 mr-2" />;
      case "Overweight":
        return <FaFrown className="text-orange-300 mr-2" />;
      case "Obese":
        return <FaHeartbeat className="text-red-400 mr-2" />;
      default:
        return null;
    }
  };

  const getBMIColor = (status) => {
    switch (status) {
      case "Underweight":
        return "text-yellow-400";
      case "Normal":
        return "text-green-400";
      case "Overweight":
        return "text-orange-400";
      case "Obese":
        return "text-red-500";
      default:
        return "text-white";
    }
  };

  const getHealthTip = (status) => {
    switch (status) {
      case "Underweight":
        return "Eat more frequent meals rich in calories, healthy fats, and proteins. Include strength training.";
      case "Normal":
        return "Maintain a balanced diet and regular physical activity to keep your BMI in this healthy range.";
      case "Overweight":
        return "Consider portion control, daily exercise, and reduced sugar intake to move toward a healthy BMI.";
      case "Obese":
        return "Consult a healthcare provider. Focus on sustainable weight loss through diet and activity.";
      default:
        return "";
    }
  };

  const bmiRanges = [
    { label: "Underweight", color: "bg-yellow-400", range: [0, 18.5] },
    { label: "Normal", color: "bg-green-400", range: [18.5, 24.9] },
    { label: "Overweight", color: "bg-orange-400", range: [25, 29.9] },
    { label: "Obese", color: "bg-red-500", range: [30, 40] },
  ];

  const resetForm = () => {
    setWeight("");
    setHeightFt("");
    setHeightIn("");
    setBmi(null);
    setStatus("");
  };

  return (
    <div>
      <div className="top-ad-code"></div>
      <div
        className={`min-h-screen flex items-center justify-center p-4 transition-all duration-300 ${
          darkMode
            ? "bg-gradient-to-br from-gray-900 to-gray-800 text-white"
            : "bg-gradient-to-br from-indigo-500 to-blue-400 text-white"
        }`}
      >
        <div className="relative w-full max-w-md">
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="flex items-center gap-2 text-sm px-3 py-2 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-md"
            >
              {darkMode ? <FaSun /> : <FaMoon />}{" "}
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>

          <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-8 relative z-10">
            <h1 className="text-3xl font-bold mb-6 text-center">
              BMI Calculator
            </h1>

            <div className="mb-4">
              <label className="block text-sm mb-1">Weight (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="e.g. 70"
                className="w-full p-3 rounded-xl text-gray-900 bg-white focus:outline-none"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm mb-1">Height</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={heightFt}
                  onChange={(e) => setHeightFt(e.target.value)}
                  placeholder="ft"
                  className="w-1/2 p-3 rounded-xl text-gray-900 bg-white focus:outline-none"
                />
                <input
                  type="number"
                  value={heightIn}
                  onChange={(e) => setHeightIn(e.target.value)}
                  placeholder="in"
                  className="w-1/2 p-3 rounded-xl text-gray-900 bg-white focus:outline-none"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={calculateBMI}
                className="flex-1 bg-indigo-600 hover:bg-indigo-700 transition-colors text-white py-3 rounded-xl font-semibold text-lg shadow-lg"
              >
                Calculate
              </button>
              <button
                onClick={resetForm}
                className="flex-1 bg-red-500 hover:bg-red-600 transition-colors text-white py-3 rounded-xl font-semibold text-lg shadow-lg"
              >
                Reset
              </button>
            </div>

            {bmi && (
              <>
                <div className="mt-6 text-center">
                  <p className="text-xl font-semibold">Your BMI is</p>
                  <p className={`text-4xl font-bold ${getBMIColor(status)}`}>
                    {bmi}
                  </p>
                  <div className="flex justify-center items-center mt-2 text-lg">
                    {getStatusIcon(status)}
                    <span>{status}</span>
                  </div>
                </div>

                <div className="mt-8">
                  <p className="font-semibold text-center mb-2">
                    BMI Classification
                  </p>
                  <div className="flex w-full h-6 rounded-lg overflow-hidden">
                    {bmiRanges.map((item, idx) => {
                      const [min, max] = item.range;
                      const isActive = bmi >= min && bmi < max;
                      return (
                        <div
                          key={idx}
                          className={`${item.color} flex-1 relative`}
                        >
                          {isActive && (
                            <div className="absolute top-[-16px] left-1/2 transform -translate-x-1/2 text-xs font-bold">
                              ▲
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex justify-between text-xs mt-1 px-1">
                    {bmiRanges.map((item, idx) => (
                      <span key={idx}>{item.label}</span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 bg-white/30 backdrop-blur-sm p-4 rounded-xl text-sm text-center">
                  <p className="font-bold mb-2 text-black">Health Tip</p>
                  <p className="font-bold text-black">{getHealthTip(status)}</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="bottom-ad-code"></div>
    </div>
  );
}
