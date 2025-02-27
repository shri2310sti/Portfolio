import { arrowIcon } from "../data/data";
import { about } from "../data/data";
export function About() {
  return (
    <>
      <div className="container p-4">
        <h1 className="text-white text-2xl font-semibold">About Me</h1>
        <div className="p-4 text-primary bg-primaryBg rounded-md my-4">
          <p className="">{about}</p>

           <div className="mt-6 text-primary">
            {/* <h4 className="text-lg">Experience:</h4> */}
            <div className="pl-1 my-2">
              {/* <div className="flex gap-2 my-2">
                <span>{arrowIcon}</span>
                <div className="flex flex-col">
                  <p>Centricwave LLP</p>
                  <p className="text-xs pl-2">Software Engineering Intern</p>
                </div>
              </div> */}
              {/* <div className="flex gap-2 items-center">
                <span>{arrowIcon}</span>
                <div className="text-sm">Tech Stack : React.js, Nextjs.</div>
              </div> */}
            </div>
          </div> 

          <div className="mt-6 text-primary">
            <h4 className="text-lg">Education:</h4>
            <div className="pl-1 my-2">
              <div className="flex gap-2 my-2">
                <span>{arrowIcon}</span>
                <div className="flex flex-col">
                  <p>Vellore Institue of Technolgy, Bhopal</p>
                  <p className="text-xs pl-2">
                    Computer Science and Engineering (2026)
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                {/* <span>{arrowIcon}</span> */}
                <div className="text-sm">CGPA : 8.67</div>
              </div>
            </div>
          </div>
          <div className="mt-6 text-primary">
            {/* <h4 className="text-lg">Education:</h4> */}
            <div className="pl-1 my-2">
              <div className="flex gap-2 my-2">
                <span>{arrowIcon}</span>
                <div className="flex flex-col">
                  <p>XII </p>
                  <p className="text-xs pl-2">
                    Vivekanand Mission Vidhyapeeth (2021)
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                {/* <span>{arrowIcon}</span> */}
                <div className="text-sm">Percentage : 72.8%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
