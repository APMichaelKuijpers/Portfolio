import styles from "./HomePage.module.css";
import { useContext } from "react";
import DataContext from "../../DataContext";

const HomePage = () => {
  const { pokemon } = useContext(DataContext);
  return (
    <main>
      <section className={styles.bioFlex}>
        <section className={styles.bioSection}>
          <img src="/michaelKuijpersFoto.jpg" className={styles.MichaelFoto} />
        </section>
        <section className={styles.bioSection}>
          <h3 className={styles.bioPink}>
            Hi! Thank you for taking a look at my website!
          </h3>
          <p>
            I am Michael Kuijpers ('s-Hertogenbosch, 1996) I am a{" "}
            <span className={styles.bioPink}>
              programmer, animator & illustrator
            </span>
            . Ever since I was little I loved being creative, you could often
            find me crafting or drawing. At the age of 14 I started making
            small, simple animations. The older I got the more I realized that I
            wanted to do something creative in my life.
          </p>
          <p>
            That is why I went to the Koning Willem 1 College in 2012 and there
            I followed the{" "}
            <span className={styles.bioPink}>MBO course Media Design</span>.
            After I graduated there, I went to the AKV|St.Joost in 2016 to do
            the{" "}
            <span className={styles.bioPink}>HBO Animation & Illustration</span>{" "}
            course there. In 2020 I graduated and started working as a
            freelancer. During that year I noticed that I was interested in
            coding, so after the summer I moved to Antwerp to do the{" "}
            <span className={styles.bioPink}>
              Graduate course in Programming
            </span>{" "}
            there.
          </p>
          <p>
            I love learning to code, especially when working on the frontend. I
            like to make designs for it and try to improve myself with every
            assignment. Ultimately, I want to merge the creative and the coding
            and find a job where I can work with both. I mainly work with Adobe
            Photoshop, Illustrator, Indesign, After Effects and Premiere Pro.
            With coding I work with TypeScript, Javascript, PHP, HTML, CSS,
            React and a bit of C#.
          </p>
          <p>
            If you have any questions, please feel free to send me an email to{" "}
            <span className={styles.bioPink}>info@michaelkuijpers.net</span>, or
            fill in the contact form on the contact page.
          </p>
        </section>
        <section className={styles.bioSection}>
          <h3 className={styles.bioPink}> Coding skill set</h3>
          <div className={styles.barsSeperation}>
            <p>HTML + CSS</p>
          </div>
          <div className={styles.progress}>
            <div className={styles.bar}>85%</div>
          </div>
          <div className={styles.barsSeperation}>
            <p>Javascipt + Typescript</p>
          </div>
          <div className={styles.progress}>
            <div className={styles.barTypesScript}>55%</div>
          </div>
          <div className={styles.barsSeperation}>
            <p>PHP</p>
          </div>
          <div className={styles.progress}>
            <div className={styles.barPhp}>50%</div>
          </div>
          <div className={styles.barsSeperation}>
            <p>React</p>
          </div>
          <div className={styles.progress}>
            <div className={styles.barReact}>75%</div>
          </div>
          <div className={styles.barsSeperation}>
            <p>C#</p>
          </div>
          <div className={styles.progress}>
            <div className={styles.barC}>25%</div>
          </div>
          <div className={styles.barsSeperation}>
            <p>Expo</p>
          </div>
          <div className={styles.progress}>
            <div className={styles.barExpo}>%</div>
          </div>

        </section>
      </section>
    </main>
  );
};

export default HomePage;
