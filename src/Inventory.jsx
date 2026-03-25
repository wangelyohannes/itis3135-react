import useTitle from "./useTitle";
import "./styles/inventory.css";
export default function Inventory() {
  useTitle("Inventory");
  return (
    <>
      <section id="inventory-app">
        <h2>Book Inventory</h2>

        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Category</th>
              <th>Status</th>
              <th>Rate</th>
            </tr>
          </thead>

          <tbody>
            <tr class="read">
              <td>Bleach</td>
              <td>Tite Kubo</td>
              <td>Manga</td>
              <td>
                <span class="status">Read</span>
              </td>
              <td>
                <span class="rate three">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </td>
            </tr>

            <tr class="read">
              <td>One Piece</td>
              <td>Eiichiro Oda</td>
              <td>Manga</td>
              <td>
                <span class="status">Read</span>
              </td>
              <td>
                <span class="rate two">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </td>
            </tr>

            <tr class="read">
              <td>The 48 Laws of Power</td>
              <td>Robert Greene</td>
              <td>Strategy</td>
              <td>
                <span class="status">Read</span>
              </td>
              <td>
                <span class="rate three">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </td>
            </tr>

            <tr class="in-progress">
              <td>Kagurabachi</td>
              <td>Takeru Hokazono</td>
              <td>Manga</td>
              <td>
                <span class="status">In Progress</span>
              </td>
              <td>
                <span class="rate two">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </td>
            </tr>

            <tr class="to-read">
              <td>Clean Code</td>
              <td>Robert C. Martin</td>
              <td>Software</td>
              <td>
                <span class="status">To Read</span>
              </td>
              <td>
                <span class="rate">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}
