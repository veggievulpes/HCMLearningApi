//console.log('frontend javascript')

const exchangeForm = document.querySelector('form')
exchangeForm.addEventListener('submit', (event) => {
    //$('form').addEventlistener('submit', (event) =>{
    $('#name').html('Searching...')
    event.preventDefault()
    var assignmentRecordId = $('input').val();    
    $('#symbol').empty()
    $('#price_open').empty()
    $('#price').empty()
    $('#day_high').empty()
    $('#day_low').empty()
    if (!assignmentRecordId) {
        $('#name').html('<strong>Assignment Record Id is required</strong>')
        return;
    }

    fetch(`http://localhost:3000/hcm_api?assignmentRecordId=${assignmentRecordId}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                $('#name').html(`Something wrong is not right! <strong>${data.error.message}, ${data.error.code}</strong>`)
            } else {
                
                $('#name').html(`Aluno: ${data.assignedToDisplayName}`)
                $('#symbol').html(` Nome do Conteúdo: ${data.learningItemTitle}`)
                $('#price_open').html(`Atribuído em: ${data.assignedDate}`)
                $('#price').html(`Data de Conclusão: ${data.completedDate}`)
                $('#day_high').html(`Status: ${data.assignmentSubStatus}`)
                $('#day_low').html(`Carga horária: ${data.expectedEffortInHours}`)
            }
        })
    })


})