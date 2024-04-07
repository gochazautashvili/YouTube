import { Input } from "@components/ui/input";

const Login = () => {
  return (
    <div className="flex flex-col w-full gap-4">
      <h1 className="text-xl font-semibold">Login</h1>
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
    </div>
  );
};

export default Login;
