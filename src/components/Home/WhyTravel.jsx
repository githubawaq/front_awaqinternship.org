import SeparatorHome from "../ReuseProvider/Separator";

const WhyTravel = () => {
  return (
    <div className="w-11/12 my-5	mx-auto flex flex-col flex-wrap content-center">
      <div className="flex flex-row flex-nowrap justify-center items-start md:flex-col-reverse md:flex-grow md:items-center sm:flex-col-reverse sm:flex-grow sm:items-center">
        <div className="m-5 shadow-lg rounded-xl w-1/2 md:w-full sm:w-full p-10">
          <iframe 
            className="w-full h-56"
            src="https://www.youtube-nocookie.com/embed/OzBZ0ItGlC4"
            title="Programa Awaq"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <p className="text-grey font-custom text-justify mt-10 ms:text-sm md:text-base lg:text-base xl:text-lg 2xl:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
            excepturi esse pariatur iure itaque sapiente necessitatibus quis
            modi dolor recusandae est repellendus ratione laudantium reiciendis,
            suscipit dolore harum eaque voluptatibus.
          </p>
        </div>
        <div className="m-5 my-10 md:m-0 ms:m-0 w-1/2 md:w-full sm:w-full">
          <h1 className="text-turquoise-blue text-left font-nanum ms:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl">
            POR QUE VIAJAR CON AWAQ ?
          </h1>
          <p className="text-grey font-custom text-justify my-5 ms:text-sm md:text-base lg:text-base xl:text-lg 2xl:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fuga
            non soluta, blanditiis quas totam quibusdam labore consequatur
            nostrum asperiores veniam optio magnam aliquam neque fugiat
            doloribus cupiditate unde id! <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            atque odio animi architecto quidem nobis exercitationem ratione,
            natus assumenda incidunt magnam fugit esse velit quam earum illo
            culpa, ea provident?
          </p>
        </div>
      </div>
      <SeparatorHome />
    </div>
  );
};

export default WhyTravel;
