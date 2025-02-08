"use client";

import { useState } from "react";

export default function Registration() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [classInfo, setClassInfo] = useState("");
  const [section, setSection] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [employeeCode, setEmployeeCode] = useState("");
  const [childId, setChildId] = useState("");
  const [adminCode, setAdminCode] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Registering:", {
      firstName, lastName, email, password, userType, contactNumber,
      classInfo, section, rollNumber, employeeCode, childId, adminCode
    });
  };

  return (
    <div className="screenMiddleDiv flex justify-center items-center">
      <div className="formDiv w-full max-w-[70%] p-8">
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-x-8 gap-y-4">
          <h2 className="col-span-2 text-center text-[#0F6466] font-bold text-xl mb-4">Registration</h2>
          <InputField label="First Name" value={firstName} setValue={setFirstName} />
          <InputField label="Last Name" value={lastName} setValue={setLastName} />
          <InputField label="Email Address" type="email" value={email} setValue={setEmail} />
          <InputField label="Password" type="password" value={password} setValue={setPassword} />
          <InputField label="Confirm Password" type="password" value={confirmPassword} setValue={setConfirmPassword} />
          <div>
            <label htmlFor="userType" className="formLabel">User Type</label>
            <select id="userType" value={userType} onChange={(e) => setUserType(e.target.value)}
              className="w-full bg-[#0F6466] text-white border border-[#0F6466] focus:outline-none" required>
              <option value="" disabled>Select User Type</option>
              <option value="Student">Student</option>
              <option value="Teacher">Teacher</option>
              <option value="Parent">Parent</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
          <InputField label="Contact Number" value={contactNumber} setValue={setContactNumber} />
          {userType === "Student" && <>
            <InputField label="Class" value={classInfo} setValue={setClassInfo} />
            <InputField label="Section" value={section} setValue={setSection} />
            <InputField label="Roll Number" value={rollNumber} setValue={setRollNumber} />
          </>}
          {userType === "Teacher" && <InputField label="Employee Code" value={employeeCode} setValue={setEmployeeCode} />}
          {userType === "Parent" && <InputField label="Child ID" value={childId} setValue={setChildId} />}
          {userType === "Admin" && <InputField label="Admin Code" value={adminCode} setValue={setAdminCode} />}
          <div className="col-span-2">
            <button type="submit" className="w-full py-2 bg-[#0F6466] text-white hover:bg-[#2C3532]">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}

function InputField({ label, type = "text", value, setValue }: 
  { label: string, type?: string, value: string, setValue: (val: string) => void }) {
  return (
    <div>
      <label htmlFor={label} className="formLabel">{label}</label>
      <input type={type} id={label} value={value} onChange={(e) => setValue(e.target.value)}
        required className="w-full bg-white text-black border border-[#0F6466] focus:outline-none" />
    </div>
  );
}