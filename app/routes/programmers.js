import Route from '@ember/routing/route';

export default class ProgrammersRoute extends Route {
   model() {
      return ["James Gosling", "Guido van Rossum", "Ken Thompson"];
   }
}
