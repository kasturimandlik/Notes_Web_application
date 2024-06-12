const addnote = document.querySelector("#addnote")
const main = document.querySelector("#main")
addnote.addEventListener(
    "click",
    function(){
        addnt()
    }
)
const saveNotes =() =>{
    const notes = document.querySelectorAll(".note textarea");
    console.log(notes);
    const data =[];
    notes.forEach(
        (note) => {
            data.push(note.value)
        }
    )
    //console.log(data);
    if (data.length ===0){
        localStorage.removeItem("notes")
    } else {
    localStorage.setItem("notes",JSON.stringify(data))
    }
}
//<div class="note">
//   <div class="tool">
//       <i class="fa-solid fa-floppy-disk"></i>
//      <i class="fa-solid fa-trash"></i>
//  </div>
// <textarea></textarea>
//</div>       
const addnt = (text = "") => {
    const note = document.createElement("div");
    note.classList.add("note")
    note.innerHTML = `
    <div class="tool">
        <i class="save fa-solid fa-floppy-disk"></i>
        <i class="trash fa-solid fa-trash"></i>
    </div>
    <textarea></textarea>
    `;
note.querySelector(".trash").addEventListener(
    "click",
    function(){
        note.remove()
        saveNotes()
    }
    )
    note.querySelector(".save").addEventListener(
        "click",
        function(){
            saveNotes()
        }
    )
    note.querySelector("textarea").addEventListener(
        "focusout",
        function(){
            saveNotes()
        }
    )
    main.appendChild(note);
    saveNotes();
}
(
    function(){
        const lsNotes = JSON.parse(localStorage.getItem("notes"));
        if(lsNotes === null){
            addnt()
        } else {
            lsNotes.forEach(
                (lsNotes) =>{
                    addnt(lsNotes)
                }
            )
        }
    }
)()