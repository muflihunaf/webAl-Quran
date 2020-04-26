function main() {
    const BaseUrl = "https://al-quran-8d642.firebaseio.com/";
    const semuasurah = async () => {
        try {
            const response = await fetch(`${BaseUrl}/data.json`);
            const responeJson = await response.json();
            if(responeJson.error){
                showResponseMessage(responeJson.error)
            }else{
                tampilsurah(responeJson)
            }
        } catch (error) {
            showResponseMessage(error)
        }
    }

    const tampilsurah = (surah) => {
        const list = document.querySelector("#list");
        list.innerHTML ="";
        surah.forEach(surat =>{
            list.innerHTML += `
            <div class="card bg-default">
            <div class="card-body">
                <h4 class="card-subtitle  text-right">${surat.asma}</h4>
                <a class="card-text surat text-left h6" id="${surat.nomor}">${surat.nomor}. Surah ${surat.nama} (${surat.urut} ) </a>
                <p class="card-subtitle text-muted">${surat.arti}</p>

            </div>
            `;

        });
        const surat = document.querySelectorAll(".surat");
        surat.forEach(surah => {
            surah.addEventListener("click", event => {
                const suratId = event.target.id;
                detailSurah(suratId);
            })
        });
    }

    const detailSurah = async (id) => {
        try {
            const response = await fetch(`${BaseUrl}/surat/${id}.json`);
            const responeJson = await response.json();
            if(responeJson.error){
                showResponseMessage(responeJson.error)
            }else{
                tampilDetail(responeJson)
            }
        } catch (error) {
            showResponseMessage(error)
        }
    }
    const tampilDetail = (surah) => {
        const detail = document.querySelector("#detail");
        const list = document.querySelector("#list");
        list.innerHTML ="";
        detail.innerHTML ="";
        surah.forEach(surat =>{
            detail.innerHTML += `
            <div class="card bg-default" >
            <div class="card-title float-left" style="padding-top: 30px;">
            <p class="h4">${surat.ar}</p>
            </div>
            <div class="card-body">
                <div class="pull-right">

                </div>
                <h6 class="card-subtitle ">${surat.tr}</h6>
                <p class="card-text" >${surat.id}</p>


            </div>
            `;

        });
    }

    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    };
    document.addEventListener("DOMContentLoaded", () => {
        semuasurah();
    }
    );
}

export default main;