var lifeCycle = {
    onCreated: ()=>{
        main.loading.nonActive();
    }
}
//created 
lifeCycle.onCreated();

// event handler
// notes
select('.btn-confirm-notes').on("click", ()=>{
    main.loading.active();
})

select(".button--save-notes").on('click', ()=>{
    let savedData = {
        name: "Zee",
        note: getValue('.notes-area'),
        date: new Date().getTime()
    }
    allServices.saveNotes(savedData, response=>{
        alert('Saved');
    })
})