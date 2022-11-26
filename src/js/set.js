export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(Character) {
    if (this.members.has(Character)) {
      throw new Error('This character is already in the team');
    } else { this.members.add(Character); }
  }

  addAll(...Characters) {
    for (const Character of Characters) {
      this.members.add(Character);
    }
  }

  toArray() {
    return Array.from(this.members);
  }
}
