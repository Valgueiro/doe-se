# -*- coding: utf-8 -*-
"""The app module, containing the app factory function."""
from flask import Flask
from api.extensions import bcrypt, cache, db, migrate, jwt, cors

from api import user, profile, articles, requirements
from api.settings import ProdConfig
from api.exceptions import InvalidUsage
from flask_apispec.extension import FlaskApiSpec


def create_app(config_object=ProdConfig):
    """An application factory, as explained here:
    http://flask.pocoo.org/docs/patterns/appfactories/.

    :param config_object: The configuration object to use.
    """
    app = Flask(__name__.split('.')[0])
    app.url_map.strict_slashes = False
    app.config.from_object(config_object)
    register_extensions(app)
    register_blueprints(app)
    register_errorhandlers(app)
    register_shellcontext(app)
    # register_docs(app)
    return app


def register_extensions(app):
    """Register Flask extensions."""
    bcrypt.init_app(app)
    cache.init_app(app)
    db.init_app(app)
    migrate.init_app(app, db)
    jwt.init_app(app)


def register_blueprints(app):
    """Register Flask blueprints."""
    origins = app.config.get('CORS_ORIGIN_WHITELIST', '*')
    cors.init_app(user.views.blueprint, origins=origins)
    cors.init_app(profile.views.blueprint, origins=origins)
    cors.init_app(articles.views.blueprint, origins=origins)
    cors.init_app(requirements.views.blueprint, origins=origins)

    app.register_blueprint(user.views.blueprint)
    app.register_blueprint(profile.views.blueprint)
    app.register_blueprint(articles.views.blueprint)
    app.register_blueprint(requirements.views.blueprint)


def register_errorhandlers(app):

    def errorhandler(error):
        response = error.to_json()
        response.status_code = error.status_code
        return response

    app.errorhandler(InvalidUsage)(errorhandler)


def register_shellcontext(app):
    """Register shell context objects."""
    def shell_context():
        """Shell context objects."""
        return {
            'db': db,
            'User': user.models.User,
            'UserProfile': profile.models.UserProfile,
            'Article': articles.models.Article,
            'Tag': articles.models.Tags,
            'Comment': articles.models.Comment,
            'Requirement': requirements.models.Requirement
        }

    app.shell_context_processor(shell_context)

# from apispec import APISpec
# from apispec.ext.marshmallow import MarshmallowPlugin
# from apispec_webframeworks.flask import FlaskPlugin
# def register_docs(app):
#     spec = APISpec(
#             openapi_version="3.0.3",
#             title='doe-se',
#             version='v1',
#             plugins=[FlaskPlugin(), MarshmallowPlugin()],
#         ),


#     spec.components.schema("Requirements", schema=requirements.schema)

#     app.config.update({
#         'APISPEC_SPEC': spec,
#         'APISPEC_SWAGGER_UI_URL': '/docs/',
#     })  
#     docs = FlaskApiSpec(app)
