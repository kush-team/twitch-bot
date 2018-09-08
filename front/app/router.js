import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('winners', function() {
  });

  this.route('prizes', function() {
    this.route('edit', { path: ":prize_id/edit" });
    this.route('new');
    this.route('show', { path: ":prize_id/show" });
  });
  this.route('spinwheels', function() {
    this.route('new');
    this.route('edit', { path: ":spinwheel_id/edit" });
    this.route('show', { path: ":spinwheel_id/show" });
  });
});

export default Router;
