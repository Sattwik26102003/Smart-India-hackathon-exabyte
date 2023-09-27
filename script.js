document.getElementById('consumerBtn').addEventListener('click', function() {
    document.getElementById('consumerForm').classList.add('active');
    document.getElementById('lawyerForm').classList.remove('active');
});

document.getElementById('lawyerBtn').addEventListener('click', function() {
    document.getElementById('lawyerForm').classList.add('active');
    document.getElementById('consumerForm').classList.remove('active');
});
