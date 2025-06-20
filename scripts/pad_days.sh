#!/usr/bin/env bash
shopt -s extglob nullglob

for d in Day*; do
  # only process directories
  [ -d "$d" ] || continue

  # match "Day" + digits + the rest (suffix)
  if [[ $d =~ ^(Day)([0-9]+)(_.+)$ ]]; then
    prefix=${BASH_REMATCH[1]}    # e.g. "Day"
    num=${BASH_REMATCH[2]}       # e.g. "10"
    suffix=${BASH_REMATCH[3]}    # e.g. "TimeBasedKeyValueStore"

    # pad the number
    pad=$(printf "%03d" "$num")  # "010"

    new="${prefix}${pad}${suffix}"
    echo "Renaming: '$d' → '$new'"
    mv "$d" "$new"
  fi
done
