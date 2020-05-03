import React, { useContext } from "react";
import "./Contenu.css";
import { ThemeContext } from "../../Context/ThemeContext";

export default function Contenu() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme ? "contenu light" : "contenu dark"}>
      <h1>Lorem ipsum dolor sit amet.</h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, tempora hic.
      Neque quasi veritatis omnis eius necessitatibus totam placeat illum? Modi
      explicabo quis molestiae aut. Doloribus, quae dicta! Quam id voluptatibus
      adipisci eius vel fuga, incidunt impedit! Illo odio voluptates consectetur
      eveniet veniam iste dolore accusamus debitis? Dignissimos asperiores,
      mollitia similique facilis vitae dolor. Ad alias quos eligendi in
      perspiciatis quasi ullam doloremque aperiam blanditiis ducimus, asperiores
      culpa soluta ratione quam vero. Pariatur, tenetur quidem dolores vitae
      ratione tempore quaerat fuga dolorum natus sint dolor facere autem
      excepturi dicta. Quo soluta sed omnis a repellendus reiciendis corrupti
      accusamus quidem voluptate accusantium quia beatae voluptatum quibusdam
      delectus, nisi corporis eaque voluptas quisquam, blanditiis amet modi
      iusto quis libero. Animi quaerat dolore beatae fuga nisi debitis inventore
      aliquam, est ipsa nulla odit? Laboriosam nulla id quas adipisci aperiam
      illum, minus aliquid quam enim ipsa amet voluptatibus eos recusandae sit
      dolore animi accusamus quia expedita beatae delectus, perferendis
      inventore ab obcaecati. Eum ipsa enim temporibus dolorem aut dicta vero
      hic ab velit. Suscipit inventore labore alias numquam perferendis
      architecto animi porro voluptas eligendi debitis perspiciatis quisquam
      ipsa recusandae id, rerum, vel delectus possimus officia sed minima!
      Tenetur quis molestiae atque exercitationem quam odit.
    </div>
  );
}
