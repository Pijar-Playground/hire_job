import Link from "next/link";

import Navigations from "@/components/Navigations";
import Footer from "@/components/Footer";

import { useSelector, useDispatch } from "react-redux";
import { increment} from '@/store/reducers/counterSlice'

export default function Home() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  console.log(state)

  const handleCounter = () => {
    dispatch(increment());
  }

  return (
    <>
      <main>
        <Navigations />

        {/* Header */}
        <header className="container content-to-center">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-5">
              <h1 className="d-block mb-3">
                Talenta terbaik negri untuk perubahan revolusi 4.0
              </h1>
              <p className="d-block mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor.
              </p>
              <Link href="/register">
                <button className="btn btn-primary btn-lg">
                  Mulai Dari Sekarang
                </button>
              </Link>

              <button
                className="btn btn-primary btn-lg"
                onClick={handleCounter}
              >
                Counter : {state.counterSlice.value}
              </button>
            </div>
            <div className="col-md-5">
              <img src="/home_1.jpg" alt="Home Picture" />
            </div>
          </div>
        </header>
        {/* End of Header */}

        {/* Why Peeworld */}
        <section className="container" style={{ marginBottom: "200px" }}>
          <div className="row">
            <div className="col-md-5">
              <img src="/home_2.jpg" alt="Home Picture" />
            </div>
            <div className="col-md-5">
              <h2 className="mb-5">Kenapa harus mencari tallent di peworld</h2>

              {[...new Array(4)].map((item, key) => (
                <div className="d-flex align-items-center mb-5" key={key}>
                  <img src="/circleCheck.svg" style={{ marginRight: "20px" }} />
                  <p className="mb-0">Lorem ipsum dolor sit amet.</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* End Of Why Peeworld */}

        {/* Skill Tallent */}
        <section className="container" style={{ marginBottom: "200px" }}>
          <div className="row justify-content-end">
            <div className="col-md-5">
              <h2>Skill Tallent</h2>
              <p className="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor.
              </p>

              <div className="row">
                <div className="col-md-6">
                  {["Java", "Kotlin", "PHP", "Javascript"].map((item, key) => (
                    <div className="d-flex align-items-center mb-5" key={key}>
                      <img
                        src="/circleCheckYellow.svg"
                        style={{ marginRight: "20px" }}
                      />
                      <p className="mb-0">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="col-md-6">
                  {["Golang", "C++", "Ruby", "10+ Bahasa lainnya"].map(
                    (item, key) => (
                      <div className="d-flex align-items-center mb-5" key={key}>
                        <img
                          src="/circleCheckYellow.svg"
                          style={{ marginRight: "20px" }}
                        />
                        <p className="mb-0">{item}</p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <img src="/home_2.jpg" alt="Home Picture" />
            </div>
          </div>
        </section>
        {/* End Of Skill Tallent */}

        {/* Footer */}
        <Footer />
        {/* End of Footer */}
      </main>
    </>
  );
}
