class footballTeam{
    constructor(clubName, country){
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
        this.obj = {};
    }

    newAdditions(footballPlayers){
        footballPlayers = footballPlayers.map(x => x.split('/'));
        let dict = {};
        footballPlayers.forEach(x => dict[x[0]] = x[2]);
        let names = [];
        for(let i = 0; i < footballPlayers.length; i++){
            let player = {
                name: footballPlayers[i][0],
                age: Number(footballPlayers[i][1]),
                playerValue: Number(footballPlayers[i][2])
            }
            if(names.includes(player.name)){
                if(dict[player.name] < player.playerValue) 
                    this.invitedPlayers.push(player);
            }
            else {
                this.invitedPlayers.push(player);
                this.obj[player.name] = Number(player.playerValue); 
                names.push(player.name);
            }
        }
        return `You successfully invite ${names.join(', ')}.`
    }

    signContract(selectedPlayer){
        let data = selectedPlayer.split('/');
        if(!this.chechForName(data)){
            throw Error(`${data[0]} is not invited to the selection list!`);
        }
        if(this.obj[data[0]] > Number(data[1])){
            throw Error(`The manager's offer is not enough to sign a contract with ${data[0]}, ${this.obj[data[0]] - data[1]} million more are needed to sign the contract!`);
        }
    }

    chechForName(curr){
        this.invitedPlayers.forEach(x => {
            if(x.name === curr) return true;
        });
        return false;
    }
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract('Lionel Messi/31'));