import { Input } from "@components/ui/input";

const Register = ({ handelUploadProfile }) => {
  return (
    <div className="flex flex-col w-full gap-4">
      <h1 className="text-xl font-semibold">Register</h1>
      <Input className="border-black" placeholder="Enter Your Name" />
      <Input
        type="email"
        className="border-black"
        placeholder="Enter Your Gmail"
      />
      <Input
        type="password"
        className="border-black"
        placeholder="Enter Your Password"
      />
      <Input
        type="file"
        className="border-black"
        onChange={handelUploadProfile}
      />
    </div>
  );
};

export default Register;
