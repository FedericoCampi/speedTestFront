export default function Home() {
  console.log(process.env.MY_SECRET_VARIABLE);
  
  return (
    <div className="">
      {process.env.MY_SECRET_VARIABLE}
    </div>
  );
}
