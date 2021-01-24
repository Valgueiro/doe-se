# -*- coding: utf-8 -*-
"""Create an application instance."""
from flask.helpers import get_debug_flag

from api.app import create_app
from api.settings import DevConfig, ProdConfig

CONFIG = DevConfig if get_debug_flag() else ProdConfig

import os


if __name__ == "__main__":
    app = create_app(CONFIG)
    app.run(
        host=os.environ.get("FLASK_HOST", '0.0.0.0'),
        port=os.environ.get("PORT_PUBLIC", 5000),
        debug=True,
    )
else:
    app = create_app(CONFIG)
