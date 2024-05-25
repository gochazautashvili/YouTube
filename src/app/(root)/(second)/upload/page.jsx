import dynamic from "next/dynamic";
const Upload = dynamic(() => import("@components/Upload"), {
  ssr: false,
  loading: () => (
    <h1 className="text-center text-3xl text-black">Loading...</h1>
  ),
});

const Uploading = () => {
  return (
    <section>
      <Upload />
    </section>
  );
};

export default Uploading;
