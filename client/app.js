$(document).ready(function () {
    $.ajax(
        {
            type: "GET",
            url: `/api`,
            dataType: "json",
        }).then(function (response) {
            console.log(response);
        }).then(() => {
            $.ajax(
                {
                    type: "GET",
                    url: "/api/count",
                    dataType: "json",
                }).then((res) => console.log(res));
        });
});