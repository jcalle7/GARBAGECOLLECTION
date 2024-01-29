function createHistoricalRelationship(RobertDudley, IsabelIdeInglaterra, AmyRobsart) {
    RobertDudley.bestFriend = IsabelIdeInglaterra;
    IsabelIdeInglaterra.bestFriend = RobertDudley; 

    return {
        RobertDudley: RobertDudley,
        IsabelIdeInglaterra: IsabelIdeInglaterra,
        AmyRobsart: AmyRobsart,
    }
} 

let historicalCouple = createHistoricalRelationship ({ name: "RobertDudley"}, { name: "IsabelIdeInglaterra"}, { name: "AmyRobsart"}); 
alert(historicalCouple.queen);

delete historicalCouple.IsabelIdeInglaterra; 
alert(historicalCouple.IsabelIdeInglaterra); 

delete historicalCouple.RobertDudley.bestFriend;
alert(historicalCouple.RobertDudley); 
