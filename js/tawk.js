const modalSection = document.querySelector(".tawk");

const modal = `  <!-- Modal -->
<div
class="modal fade pr-0"
id="tawkModal"
tabindex="-1"
role="dialog"
aria-labelledby="tawkModalLabel"
aria-hidden="true"
>
  <div
    class="modal-dialog modal-dialog-right modal-md custom-modal"
    role="document"
  >
    <div class="modal-content">
      <div class="modal-header border-0">
        <button
          type="button"
          class="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body p-0">
        <div class="container">
          <iframe
            height="550px"
            width="100%"
            class="border-0"
            name="iframe1"
            src="https://tawk.to/chat/5fc6629fa1d54c18d8ef451e/default"
          ></iframe>
        </div>
      </div>
    </div>
  </div></div>`;

window.addEventListener("DOMContentLoaded", () => {
  if (modalSection.innerHTML === "") {
    modalSection.innerHTML = modal;
    setTimeout(() => {
      document.querySelector(".tawk-container a").click();
    }, 10000);
  }
});
