import BlogCard from "../components/blogCard";

const Home = () => {
  return (
    <>
      <div className="flex justify-center items-center font-bold text-[40px] m-4">
        Welcome to the Blog
      </div>
      <span className="flex justify-center items-center space-x-9 mt-16">
        <BlogCard
          title="The tale of the White Wolf"
          smallDes="The Witcher is a mutant in the mediveal time who also uses some demon arts tricks."
          author="Geralt of Rivia"
          img="https://cdn.discordapp.com/attachments/881530050120413194/883411597303881768/The_Witcher_3_Screenshot_2021.09.03_-_20.11.15.63.png"
        />
        <BlogCard
          title="King of curses"
          smallDes="According to a legend, during the golden age of jujutsu over 1,000 years ago, Sukuna was an Imaginary Demon"
          author="Roymen Sukuna"
          img="https://cdn.discordapp.com/attachments/881530050120413194/881539136748683264/wallhaven-y8mmrk_3840x2160.png"
        />
      </span>
    </>
  );
};

export default Home;
