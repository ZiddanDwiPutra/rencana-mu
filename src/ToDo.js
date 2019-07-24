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