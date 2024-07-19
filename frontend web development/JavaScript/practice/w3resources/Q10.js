class Bank {
    constructor(name) {
        this._bankNames = name;
        this.branches = [];
    }
    get bankNames(){
        console.log(`Bank name is ${this._bankNames}`);
    }
    addBranch(branch_name) {
        this.branches.push(branch_name);
        console.log(`Branch ${branch_name} added success fully to ${this._bankNames}`);
    }
    removeBranch(branch_name) {
        let index = this.branches.indexOf(branch_name);
        if (index === -1) {
            console.log(`No branch with the name ${branch_name} is found`);
        }
        else{
            let removed_branch_index = this.branches.indexOf(branch_name);
            let removed_branch = this.branches[removed_branch_index];
            this.branches.splice(removed_branch_index, 1);
            console.log(`Branch ${removed_branch} is removed success fully from ${this._bankNames}`);
        }
    }
    displayBranchesName(){
     if(this.branches.length === 0){
        console.log(`No Branches avlaible in ${this._bankNames}`);
     }else{
        console.log(`Name of Branches in ${this._bankNames} are:-`);
        this.branches.forEach((branch, index) => console.log(`${index + 1}. ${branch}`));
     }
    }
}
const bank1 = new Bank("Always Be Ready(ABU)");
bank1.bankNames;
bank1.addBranch("Branch A");
bank1.addBranch("Branch B");
bank1.addBranch("Branch C");
bank1.addBranch("Branch D");
bank1.removeBranch("Branch D");
bank1.displayBranchesName();