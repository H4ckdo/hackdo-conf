#!/bin/sh
# Make backup
# -b=true -d=<database> -u=<user> -p=<passoword>


# Sycronize
#	Local: -s=true -l=true -d=<database> -f=<path/to/backup>
# Production: -s=true -d=<database> -f=<path/to/backup> -u=<user> -p=<password>


DATE=`date +%Y_%m_%d_%H_%M_%S`
BACKUP=false
for i in "$@"
do
case $i in
    -b=*|--backup=*)
    BACKUP="${i#*=}"
    shift # past argument=value
    ;;
    -s=*|--sync=*)
    SYNC="${i#*=}"
    shift # past argument=value
    ;;
    -d=*|--database=*)
    DATABASE="${i#*=}"
    shift # past argument=value
    ;;
    -p=*|--password=*)
    PASSWORD="${i#*=}"
    shift # past argument=value
    ;;
    -l=*|--local=*)
    LOCAL="${i#*=}"
    shift # past argument=value
    ;;
    -f=*|--folder=*)
    FOLDER="${i#*=}"
    shift # past argument=value
    ;;
    -u=*|--user=*)
    USER="${i#*=}"
    shift # past argument=value
    ;;
    *)
            # unknown option
    ;;
esac
done

if [ -n $BACKUP ]; then
	if [ "$BACKUP" == "true" ]; then
		echo "Attempting backup..."
        mongodump -h ds141209.mlab.com:41209 -d $DATABASE -u $USER -p $PASSWORD -o ./backups/$DATE >> ./backups/log.txt 2>&1
        sed -i -e '$a Backup finish at: '$DATE ./backups/log.txt 2>&1
        cat ./backups/log.txt

	else
		if [ "$SYNC" == "true" ]; then
			echo "sync"
			if [ "$LOCAL" == "true" ]; then
				echo "Attempting synchronisation to local..."
				mongorestore --drop --db $DATABASE ./backups/"$FOLDER"/$DATABASE
			else
				echo "Attempting synchronisation to production..."
				mongorestore --drop -h ds141209.mlab.com:41209 -d $DATABASE -u $USER -p $PASSWORD ./backups/"$FOLDER"/$DATABASE >> Synchronisation.md
			fi
		fi
	fi
fi
