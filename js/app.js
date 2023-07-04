let data = [
  {
    id: 1,
    img: "./img/Avatar.png",
    name: "Jacob",
    surname: "Jones",
    email: "jackson.graham@example.com",
    city: "Dushanbe",
    status: "INACTIVE",
    mobile_phone: 888880090,
    complete: false,
  },
  {
    id: 2,
    img: "./img/Avatar2.png",
    name: "Jenny",
    surname: "Wilson",
    email: "jessica.hanson@example.com",
    city: "Kulob",
    status: "INACTIVE",
    mobile_phone: 888880090,
    complete: false,
  },
  {
    id: 3,
    img: "./img/Avatar3.png",
    name: "Guy",
    surname: "Hawkins",
    email: "bill.sanders@example.com",
    city: "Dushanbe",
    status: "INACTIVE",
    mobile_phone: 888880090,
    complete: false,
  },
  {
    id: 4,
    img: "./img/Avatar4.png",
    name: "Cody",
    surname: "Fisher",
    email: "michael.mitc@example.com",
    city: "Bokhtar",
    status: "ACTIVE",
    mobile_phone: 888880090,
    complete: false,
  },
  {
    id: 5,
    img: "./img/Avatar5.png",
    name: "Esther",
    surname: "Howard",
    email: "felicia.reid@example.com",
    city: "Dushanbe",
    status: "ACTIVE",
    mobile_phone: 888880090,
    complete: false,
  },
  {
    id: 6,
    img: "./img/Avatar6.png",
    name: "Kristin",
    surname: "Watson",
    email: "kenzi.lawson@example.com",
    city: "Khujand",
    status: "ACTIVE",
    mobile_phone: 888880090,
    complete: false,
  },
  {
    id: 7,
    img: "./img/Avatar7.png",
    name: "Dianne",
    surname: "Russell",
    email: "deanna.curtis@example.com",
    city: "Dushanbe",
    status: "INACTIVE",
    mobile_phone: 888880090,
    complete: false,
  },
  {
    id: 8,
    img: "./img/Avatar8.png",
    name: "Ronald",
    surname: "Richards",
    email: "tim.jennings@example.com",
    city: "Hisor",
    status: "ACTIVE",
    mobile_phone: 888880090,
    complete: false,
  },
];

const root = document.querySelector("#root");

const header = document.createElement("header");
header.classList.add("header");

const block1Header = document.createElement("div");
block1Header.classList.add("block_1_header");

const block1aHeader = document.createElement("div");
block1aHeader.classList.add("block_1_a_header");

const h1Block1aHeader = document.createElement("h1");
h1Block1aHeader.innerHTML = "User List";

const block1bHeader = document.createElement("div");
block1bHeader.classList.add("block_1_b_header");

const btn1Block1bHeader = document.createElement("div");
btn1Block1bHeader.classList.add("btn_1_block_1_b_header");

const modal = document.querySelector(".modal");
const iconClose = document.querySelector("#close");
const inputForImg = document.querySelector("#input_for_img");
const inputForName = document.querySelector("#input_for_name");
const inputForSurname = document.querySelector("#input_for_surname");
const inputForEmail = document.querySelector("#input_for_email");
const radioActive = document.querySelector("#radio_active");
radioActive.value = "ACTIVE";

const textActive = document.querySelector("#text_active");
const radioInactive = document.querySelector("#radio_inactive");
radioInactive.value = "INACTIVE";
const textInactive = document.querySelector("#text_imactive");
const citiesInsideModal = document.querySelector("#cities_inside_modal");
const inputPhoneNumber = document.querySelector("#numberPhoneInput");
const btnSave = document.querySelector("#save");
const btnCancel = document.querySelector("#cancel");

const viewUser = document.querySelector("#view");
const 
editUser = document.querySelector("#edit");
const deleteUser = document.querySelector("#delete");

const viewModal = document.querySelector("#view_modal");

const imgViewModal = document.querySelector("#img_view_modal");
const nameViewModal = document.querySelector("#name_view_modal");
const surnameViewModal = document.querySelector("#surname_view_modal");
const emailViewModal = document.querySelector("#email_view_modal");
const titleCityViewModal = document.querySelector("#title_city_view_modal");
const cityViewModal = document.querySelector("#city_view_modal");
const titleStatusViewModal = document.querySelector("#title_city_view_modal");
const statusViewModal = document.querySelector("#city_view_modal");
const titlePhoneViewModal = document.querySelector("#title_city_view_modal");
const phoneViewModal = document.querySelector("#city_view_modal");


const closeViewModal = document.querySelector("#close_view_modal");
//Editing
const editModal = document.querySelector(".edit_modal");
const editClose = document.querySelector("#edit_close");
const inputForImgEdit = document.querySelector("#input_for_img_edit");
const inputForNameEdit = document.querySelector("#input_for_name_edit");
const inputForSurnameEdit = document.querySelector("#input_for_surname_edit");
const inputForEmailEdit = document.querySelector("#input_for_email_edit");
const radioActiveEdit = document.querySelector("#radio_active_edit");
const radioInactiveEdit = document.querySelector("#radio_inactive_edit");
const citiesInsideModalEdit = document.querySelector(
  "#cities_inside_modal_edit"
);
const numberPhoneInputEdit = document.querySelector("#numberPhoneInputEdit");
const edit = document.querySelector("#edit_usr");
const cancelEdit = document.querySelector("#cancel_edit");

const modalForUsers = document.querySelector("#modal_for_control_the_users");
function activeOrInactive() {
  if (radioActive.checked) {
    return radioActive.value;
  } else {
    return radioInactive.value;
  }
}

function deleteTheUser(id) {
  data = data.filter((e) => {
    return e.id !== id;
  });
  get(data);
}

let savedId = null;

function editModalFunc(id) {
  savedId = id;
  editModal.showModal();
  let user = data.find((item) => item.id == id);
  inputForImgEdit.value = user.img;
  inputForNameEdit.value = user.name;
  inputForSurnameEdit.value = user.surname;
  inputForEmailEdit.value = user.email;
  radioActiveEdit.value = radioActive.checked;
  radioInactiveEdit.value = radioInactive.checked;
  citiesInsideModalEdit.value = user.city;
  numberPhoneInputEdit.value = user.mobile_phone;
  
}

function editUsername() {
  data = data.map((item) => {
    if (item.id == savedId) {
      item.img = inputForImgEdit.value;
      item.name = inputForNameEdit.value;
      item.surname = inputForSurnameEdit.value;
      item.email = inputForEmailEdit.value;
      item.status = activeOrInactive();
      item.city = citiesInsideModalEdit.value;
      item.mobile_phone = numberPhoneInputEdit.value;
    }
    return item;
  });
  editModal.close();
  modalForUsers.close();
  get(data);
}

edit.onclick = editUsername;
function info(e) {
  imgViewModal.src = e.img;
  nameViewModal.innerHTML = `${e.name} ${e.surname}`;
  emailViewModal.innerHTML = e.email;
  titleCityViewModal.innerHTML = "City:";
  cityViewModal.innerHTML = e.city;
  titleStatusViewModal.innerHTML = "Status:";
  statusViewModal.innerHTML = e.status;
  titlePhoneViewModal.innerHTML = "Numner phone:";
  phoneViewModal.innerHTML = e.mobile_phone;
}
iconClose.onclick = () => {
  modal.close();
};
btnCancel.onclick = () => {
  modal.close();
};

const btn1 = document.createElement("button");
btn1.innerHTML = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="white"/>
</svg>New
`;

btn1.onclick = () => {
  modal.showModal();
};

const btn2And3Block1bHeader = document.createElement("div");
btn2And3Block1bHeader.classList.add("btn_2_and_3_header");

const btn2 = document.createElement("button");
btn2.innerHTML = `
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.99998 5.83337C7.69998 5.83337 5.83331 7.70004 5.83331 10C5.83331 12.3 7.69998 14.1667 9.99998 14.1667C12.3 14.1667 14.1666 12.3 14.1666 10C14.1666 7.70004 12.3 5.83337 9.99998 5.83337ZM1.66665 10.8334H3.33331C3.79165 10.8334 4.16665 10.4584 4.16665 10C4.16665 9.54171 3.79165 9.16671 3.33331 9.16671H1.66665C1.20831 9.16671 0.833313 9.54171 0.833313 10C0.833313 10.4584 1.20831 10.8334 1.66665 10.8334ZM16.6666 10.8334H18.3333C18.7916 10.8334 19.1666 10.4584 19.1666 10C19.1666 9.54171 18.7916 9.16671 18.3333 9.16671H16.6666C16.2083 9.16671 15.8333 9.54171 15.8333 10C15.8333 10.4584 16.2083 10.8334 16.6666 10.8334ZM9.16665 1.66671V3.33337C9.16665 3.79171 9.54165 4.16671 9.99998 4.16671C10.4583 4.16671 10.8333 3.79171 10.8333 3.33337V1.66671C10.8333 1.20837 10.4583 0.833374 9.99998 0.833374C9.54165 0.833374 9.16665 1.20837 9.16665 1.66671ZM9.16665 16.6667V18.3334C9.16665 18.7917 9.54165 19.1667 9.99998 19.1667C10.4583 19.1667 10.8333 18.7917 10.8333 18.3334V16.6667C10.8333 16.2084 10.4583 15.8334 9.99998 15.8334C9.54165 15.8334 9.16665 16.2084 9.16665 16.6667ZM4.99165 3.81671C4.66665 3.49171 4.13331 3.49171 3.81665 3.81671C3.49165 4.14171 3.49165 4.67504 3.81665 4.99171L4.69998 5.87504C5.02498 6.20004 5.55831 6.20004 5.87498 5.87504C6.19165 5.55004 6.19998 5.01671 5.87498 4.70004L4.99165 3.81671ZM15.3 14.125C14.975 13.8 14.4416 13.8 14.125 14.125C13.8 14.45 13.8 14.9834 14.125 15.3L15.0083 16.1834C15.3333 16.5084 15.8666 16.5084 16.1833 16.1834C16.5083 15.8584 16.5083 15.325 16.1833 15.0084L15.3 14.125ZM16.1833 4.99171C16.5083 4.66671 16.5083 4.13337 16.1833 3.81671C15.8583 3.49171 15.325 3.49171 15.0083 3.81671L14.125 4.70004C13.8 5.02504 13.8 5.55837 14.125 5.87504C14.45 6.19171 14.9833 6.20004 15.3 5.87504L16.1833 4.99171ZM5.87498 15.3C6.19998 14.975 6.19998 14.4417 5.87498 14.125C5.54998 13.8 5.01665 13.8 4.69998 14.125L3.81665 15.0084C3.49165 15.3334 3.49165 15.8667 3.81665 16.1834C4.14165 16.5 4.67498 16.5084 4.99165 16.1834L5.87498 15.3Z" fill="black" fill-opacity="0.87"/>
</svg>Light
`;

const btn3 = document.createElement("button");
btn3.innerHTML = `
Dark<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.19313 2.52231C5.44313 2.93064 2.51813 6.11397 2.51813 9.98064C2.51813 14.1223 5.87646 17.4806 10.0181 17.4806C13.8765 17.4806 17.0598 14.564 17.4765 10.814C17.5515 10.1556 16.8265 9.63064 16.1931 10.0223C15.4931 10.4723 14.6598 10.7306 13.7681 10.7306C11.2848 10.7306 9.26813 8.71397 9.26813 6.23064C9.26813 5.3473 9.52646 4.51397 9.96813 3.82231C10.3431 3.26397 9.93479 2.46397 9.19313 2.52231Z" fill="black" fill-opacity="0.6"/>
</svg>
`;

const block2Header = document.createElement("div");
block2Header.classList.add("block_2_header");

const block2aHeader = document.createElement("div");
block2aHeader.classList.add("block_2_a_header");

const fieldset1ForSelect1 = document.createElement("fieldset");

const legendForSelect1 = document.createElement("legend");
legendForSelect1.innerHTML = "Status";

const selectInsideFieldset1 = document.createElement("select");
selectInsideFieldset1.innerHTML = `
<option value="">All status</option>
<option value="ACTIVE">Active</option>
<option value="INACTIVE">Inactive</option>
`;

const fieldset2ForSelect2 = document.createElement("fieldset");

const legendForSelect2 = document.createElement("legend");
legendForSelect2.innerHTML = "City";

const selectInsideFieldset2 = document.createElement("select");
selectInsideFieldset2.innerHTML = `
<option value="">All cities</option>
<option value="Dushanbe">Dushanbe</option>
<option value="Bokhtar">Bokhtar</option>
<option value="Khujand">Khujand</option>

`;

const block2bHeader = document.createElement("div");
block2bHeader.classList.add("block_2_b_header");

const fieldset3ForInput = document.createElement("fieldset");

const legendForInput = document.createElement("legend");
legendForInput.innerHTML = "Search";

const inputInsideFieldset3 = document.createElement("input");
inputInsideFieldset3.type = "search";
inputInsideFieldset3.placeholder = "Name, email, etc...";

btn1Block1bHeader.appendChild(btn1);
btn2And3Block1bHeader.appendChild(btn2);
btn2And3Block1bHeader.appendChild(btn3);
fieldset1ForSelect1.appendChild(legendForSelect1);
fieldset1ForSelect1.appendChild(selectInsideFieldset1);
fieldset2ForSelect2.appendChild(legendForSelect2);
fieldset2ForSelect2.appendChild(selectInsideFieldset2);
fieldset3ForInput.appendChild(legendForInput);
fieldset3ForInput.appendChild(inputInsideFieldset3);

block1aHeader.appendChild(h1Block1aHeader);
block1bHeader.appendChild(btn1Block1bHeader);
block1bHeader.appendChild(btn2And3Block1bHeader);
block2aHeader.appendChild(fieldset1ForSelect1);
block2aHeader.appendChild(fieldset2ForSelect2);
block2bHeader.appendChild(fieldset3ForInput);

block1Header.appendChild(block1aHeader);
block1Header.appendChild(block1bHeader);
block2Header.appendChild(block2aHeader);
block2Header.appendChild(block2bHeader);

header.appendChild(block1Header);
header.appendChild(block2Header);

root.appendChild(header);

const section1 = document.createElement("section");
section1.classList.add("section_1");

const divForHeader = document.createElement("div");
divForHeader.classList.add("div_for_header");

const name = document.createElement("div");
name.classList.add("name");

const h5ForName = document.createElement("h5");
h5ForName.innerHTML = `
<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 9.5C10.4844 9.5 12.5 7.48438 12.5 5C12.5 2.51562 10.4844 0.5 8 0.5C5.51562 0.5 3.5 2.51562 3.5 5C3.5 7.48438 5.51562 9.5 8 9.5ZM12 10.5H10.2781C9.58437 10.8188 8.8125 11 8 11C7.1875 11 6.41875 10.8188 5.72188 10.5H4C1.79063 10.5 0 12.2906 0 14.5V15C0 15.8281 0.671875 16.5 1.5 16.5H14.5C15.3281 16.5 16 15.8281 16 15V14.5C16 12.2906 14.2094 10.5 12 10.5Z" fill="#40464C"/>
</svg>
Name
`;

const city = document.createElement("div");
city.classList.add("city");

const h5ForCity = document.createElement("h5");
h5ForCity.innerHTML = `
<svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.99996 4.83332H9.33329V3.49999C9.33329 1.65999 7.83996 0.166656 5.99996 0.166656C4.15996 0.166656 2.66663 1.65999 2.66663 3.49999V4.83332H1.99996C1.26663 4.83332 0.666626 5.43332 0.666626 6.16666V12.8333C0.666626 13.5667 1.26663 14.1667 1.99996 14.1667H9.99996C10.7333 14.1667 11.3333 13.5667 11.3333 12.8333V6.16666C11.3333 5.43332 10.7333 4.83332 9.99996 4.83332ZM5.99996 10.8333C5.26663 10.8333 4.66663 10.2333 4.66663 9.49999C4.66663 8.76666 5.26663 8.16666 5.99996 8.16666C6.73329 8.16666 7.33329 8.76666 7.33329 9.49999C7.33329 10.2333 6.73329 10.8333 5.99996 10.8333ZM8.06663 4.83332H3.93329V3.49999C3.93329 2.35999 4.85996 1.43332 5.99996 1.43332C7.13996 1.43332 8.06663 2.35999 8.06663 3.49999V4.83332Z" fill="#40464C"/>
</svg>
City
`;

const status = document.createElement("div");
status.classList.add("status");

const h5ForStatus = document.createElement("h5");
h5ForStatus.innerHTML = `
<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_475_7972)">
<path d="M8.66667 1.33334C5 1.33334 2 4.33334 2 8.00001C2 11.6667 5 14.6667 8.66667 14.6667C12.3333 14.6667 15.3333 11.6667 15.3333 8.00001C15.3333 4.33334 12.3333 1.33334 8.66667 1.33334ZM11.4667 10.8L8 8.66668V4.66668H9V8.13334L12 9.93334L11.4667 10.8Z" fill="#40464C"/>
</g>
<defs>
<clipPath id="clip0_475_7972">
<rect width="16" height="16" fill="white" transform="translate(0.666626)"/>
</clipPath>
</defs>
</svg>
Status
<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.41666 4.18934V13.625C2.41666 13.8321 2.58456 14 2.79166 14H4.54166C4.74875 14 4.91666 13.8321 4.91666 13.625V4.18934H6.356C7.02419 4.18934 7.35881 3.38149 6.88634 2.90899L4.197 0.219649C3.90409 -0.0732571 3.42922 -0.0732571 3.13634 0.219649L0.447 2.90899C-0.0254689 3.38146 0.309156 4.18934 0.977344 4.18934H2.41666Z" fill="#40464C"/>
</svg>
`;

const phone = document.createElement("div");
phone.classList.add("phone");

const h5ForPhone = document.createElement("h5");
h5ForPhone.innerHTML = `
<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.271 1.83801H9.30825C8.93684 1.83809 8.58067 1.9857 8.31808 2.24837L2.08156 8.48488C1.81901 8.74752 1.67151 9.10368 1.67151 9.47505C1.67151 9.84642 1.81901 10.2026 2.08156 10.4652L7.0436 15.4273C7.30624 15.6898 7.66241 15.8373 8.03377 15.8373C8.40514 15.8373 8.7613 15.6898 9.02394 15.4273L15.2605 9.19074C15.5238 8.92885 15.6715 8.57241 15.6715 8.20128V3.23853C15.6715 2.86709 15.524 2.51086 15.2613 2.24822C14.9987 1.98557 14.6424 1.83801 14.271 1.83801ZM12.1751 6.73493C11.9886 6.73915 11.8031 6.70606 11.6296 6.63762C11.456 6.56917 11.2979 6.46674 11.1645 6.33634C11.0311 6.20594 10.9251 6.05021 10.8527 5.87827C10.7803 5.70634 10.743 5.52167 10.7429 5.33512C10.7429 5.14857 10.7801 4.96388 10.8524 4.79191C10.9247 4.61994 11.0307 4.46415 11.164 4.33369C11.2974 4.20322 11.4554 4.10071 11.6289 4.03218C11.8024 3.96365 11.9879 3.93047 12.1744 3.93459C12.5403 3.94268 12.8886 4.09371 13.1445 4.35533C13.4005 4.61696 13.5439 4.9684 13.544 5.33442C13.5441 5.70044 13.4009 6.05195 13.145 6.3137C12.8892 6.57546 12.541 6.72666 12.1751 6.73493Z" fill="#40464C"/>
</svg>
Phone
`;

name.appendChild(h5ForName);
city.appendChild(h5ForCity);
status.appendChild(h5ForStatus);
phone.appendChild(h5ForPhone);

divForHeader.appendChild(name);
divForHeader.appendChild(city);
divForHeader.appendChild(status);
divForHeader.appendChild(phone);
section1.appendChild(divForHeader);
root.appendChild(section1);

const mainDivForInfo = document.createElement("div");
mainDivForInfo.classList.add("main_div_for_info");
function get(newData){
  mainDivForInfo.innerHTML = "";
  newData.forEach((item) => {
    const divForInfo = document.createElement("div");
    divForInfo.classList.add("div_for_info");
    const divForName = document.createElement("div");
    divForName.classList.add("div_for_name");

    const divForImage = document.createElement("div");
    divForImage.classList.add("div_for_image");

    const img = document.createElement("img");
    img.src = item.img;
    img.alt = "unknown";

    const divForEmailAndText = document.createElement("div");
    divForEmailAndText.classList.add("email_text");

    const divForNameAndSurname = document.createElement("div");
    divForNameAndSurname.classList.add("div_for_name_surname");

    const name = document.createElement("h5");
    name.innerHTML = item.name;

    const surname = document.createElement("h5");
    surname.innerHTML = item.surname;
    surname.style.marginLeft = "10px";

    const email = document.createElement("a");
    email.href = "";
    email.innerHTML = item.email;

    const divForCity = document.createElement("div");
    divForCity.classList.add("div_for_city");

    const cityInsideDiv = document.createElement("h5");
    cityInsideDiv.innerHTML = item.city;

    const divForStatus = document.createElement("div");
    divForStatus.classList.add("div_for_status");

    const statusInsideDiv = document.createElement("h5");
    statusInsideDiv.innerHTML = item.status;
    statusInsideDiv.classList.add("active");

    if (statusInsideDiv.innerHTML === "INACTIVE") {
      statusInsideDiv.classList.toggle("inactive");
      statusInsideDiv.classList.toggle("active");
    } else if (statusInsideDiv.innerHTML === "INACTIVE") {
      statusInsideDiv.classList.toggle("active");
      statusInsideDiv.classList.toggle("inactive");
    }

    const divForPhone = document.createElement("div");
    divForPhone.classList.add("div_for_phone");

    const phoneInsideDiv = document.createElement("h5");
    phoneInsideDiv.innerHTML = item.mobile_phone;

    const divIconForClick = document.createElement("div");
    divIconForClick.classList.add("div_icon_for_click");

    const btnCloseForControl = document.querySelector(
      "#btn_cancel_for_control"
    );

    const btnForClick = document.createElement("button");
    btnForClick.innerHTML = `
    <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="2.83008" y="11.3207" width="6.79245" height="6.79245" rx="3.39623" fill="#CFD6DC"/>
<rect x="11.8867" y="11.3207" width="6.79245" height="6.79245" rx="3.39623" fill="#CFD6DC"/>
<rect x="20.9433" y="11.3207" width="6.79245" height="6.79245" rx="3.39623" fill="#CFD6DC"/>
</svg>
    `;

    btnForClick.onclick = () => {
      modalForUsers.showModal();
      editUser.onclick = () => {
        editModalFunc(item.id);
        modalForUsers.close();
      };

      viewUser.onclick = () => {
        viewModal.showModal();
        info(item);
        modalForUsers.close();
      };
      deleteUser.onclick = () => {
        modalForUsers.close();
        deleteTheUser(item.id);
      };
    };

    cancelEdit.onclick = () => {
      editModal.close();
      modalForUsers.close();
    };

    editClose.onclick = () => {
      editModal.close();
      modalForUsers.close();
    };

    btnCloseForControl.onclick = () => {
      modalForUsers.close();
    };

    closeViewModal.onclick = () => {
      viewModal.close();
    };

    //function Active
    selectInsideFieldset1.onclick = () => {
      let newarray;
      if (selectInsideFieldset1.value === "ACTIVE") {
        newarray = data.filter((e) => e.status === selectInsideFieldset1.value);
      } else if (selectInsideFieldset1.value === "INACTIVE") {
        newarray = data.filter((e) => e.status === selectInsideFieldset1.value);
      } else {
        newarray = data;
      }
      console.log(newarray);
      get(newarray);
    };

    //function Cities
    selectInsideFieldset2.onclick = () => {
      let newarr;
      if (selectInsideFieldset2.value === "Dushanbe") {
        newarr = data.filter((e) => e.city === selectInsideFieldset2.value);
      } else if (selectInsideFieldset2.value === "Bokhtar") {
        newarr = data.filter((e) => e.city === selectInsideFieldset2.value);
      } else if (selectInsideFieldset2.value === "Khujand") {
        newarr = data.filter((e) => e.city === selectInsideFieldset2.value);
      } else {
        newarr = data;
      }
      get(newarr);
    };

    //search the name

    inputInsideFieldset3.onchange = (e) => {
      let value = e.target.value.toLowerCase().trim();
      let newArr;
      if ((newArr = data.filter((e) => e.name.toLowerCase().includes(value))))
        get(newArr);
        editModal.close();
    };

    btnSave.onclick = () => {
      let newObj = {
        img: inputForImg.value,
        name: inputForName.value,
        surname: inputForSurname.value,
        email: inputForEmail.value,
        status: activeOrInactive(),
        city: citiesInsideModal.value,
        mobile_phone: inputPhoneNumber.value,
      };
      data.push(newObj);
      get(data);
      inputForImg.value = "";
      inputForName.value = "";
      inputForSurname.value = "";
      inputForEmail.value = "";
      citiesInsideModal.value = "";
      modal.close();
    };

    //light mode
    btn2.onclick = () => {
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "black";
      fieldset1ForSelect1.style.backgroundColor = "#fff";
      fieldset2ForSelect2.style.backgroundColor = "#fff";
      fieldset3ForInput.style.backgroundColor = "#fff";
      divForHeader.style.backgroundColor = "rgb(237, 249, 252)";
      divForHeader.style.color = "black";
      legendForSelect1.style.color = "black";
      legendForSelect2.style.color = "black";
      legendForInput.style.color = "black";
    };

    //dark mode
    btn3.onclick = () => {
      document.body.style.backgroundColor = "black";
      h1Block1aHeader.style.color = "#fff";
      fieldset1ForSelect1.style.backgroundColor = "#000";
      fieldset2ForSelect2.style.backgroundColor = "#000";
      fieldset3ForInput.style.backgroundColor = "#000";
      legendForSelect1.style.color = "white";
      legendForSelect2.style.color = "white";
      legendForInput.style.color = "white";
      divForHeader.style.backgroundColor = "black";
      divForHeader.style.color = "white";
    };

    // Append all elements to the DOM
    divForNameAndSurname.appendChild(name);
    divForNameAndSurname.appendChild(surname);

    divForImage.appendChild(img);
    divForEmailAndText.appendChild(divForNameAndSurname);
    divForEmailAndText.appendChild(email);

    divForName.appendChild(divForImage);
    divForName.appendChild(divForEmailAndText);
    divForCity.appendChild(cityInsideDiv);
    divForStatus.appendChild(statusInsideDiv);
    divForPhone.appendChild(phoneInsideDiv);
    divIconForClick.appendChild(btnForClick);

    divForInfo.appendChild(divForName);
    divForInfo.appendChild(divForCity);
    divForInfo.appendChild(divForStatus);
    divForInfo.appendChild(divForPhone);
    divForInfo.appendChild(divIconForClick);

    mainDivForInfo.appendChild(divForInfo);

    section1.appendChild(mainDivForInfo);
  });
}

get(data);
