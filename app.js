document.getElementById('commentForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const comment = document.getElementById('comment').value;

    const commentList = document.getElementById('commentList');

    const commentItem = document.createElement('div');
    commentItem.innerHTML = `<strong>${firstName} ${lastName}:</strong> ${comment}`;

    commentList.appendChild(commentItem);

    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('comment').value = '';
});
