########################################################################################################################
# DOCKER                                                                                                               #
########################################################################################################################

up:
	@docker-compose up --abort-on-container-exit --remove-orphans

up-api:
	@docker-compose start api

stop:
	@docker-compose stop

remove-force:
	@docker-compose rm -f

clean:
	@docker-compose down -v --remove-orphans

fresh-up: clean
	@docker-compose up --force-recreate --build --abort-on-container-exit --remove-orphans

bash:
	@docker-compose exec 'api' /bin/sh

# test_unit:
# 	@docker-compose exec 'api' bash -c 'python setup.py test'

# test_api:
# 	@docker-compose exec 'api' bash -c 'behave apis/v1/tests/features/'
