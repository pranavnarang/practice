create table terminals (
    terminalName varchar,
    fullName varchar,
    X int, 
    Y int,
    final bit,
    critSpillover float,
    terminalInjTrigger float,
    refusal float,
    powerFailures bit,
    powerFailMin int,
    powerFailLikely int,
    powerFialMax int,
    powerRepairMin int,
    powerRepairLikely int,
    powerRepairMax int,
    changeDestination bit,
    numTransferLines int,
    receiptTerminal bit,
    isTLRFeeder bit,
    terminalMinLevel bit,
    terminalMinLevelTStart bit,
    terminalMinLevelTEnd bit
)




CREATE TRIGGER 'validate_line_on_insert'
    BEFORE INSERT
    ON 'Pipelines'
    FOR EACH ROW
BEGIN
    IF ( NEW.'Source' NOT IN ( SELECT T.Name from Terminal T) )
    OR ( NEW.'Destination' NOT IN ( SELECT T2.Name from Terminal T2) )
    OR NEW.'Bypass_Line' IS NULL
    THEN
    SIGNAL SQLSTATE VALUE '45000'
        SET MESSAGE_TEXT = '[table:Pipelines] - Invalid input data'
    END IF;
END;


CREATE TRIGGER 'validate_tanks_on_insert'
    BEFORE INSERT
    ON 'Tanks'
    FOR EACH ROW
BEGIN
    IF (NEW.'Terminal' NOT IN ( SELECT T.Name from Terminal T) )
    OR (NEW.'LineIn1' NOT IN ( SELECT P.Line_Name from Pipelines P))
    -- repeat till 6
    OR (NEW.'LineOut1' NOT IN ( SELECT P2.Line_Name from Pipelines P2))
    -- repeat till 6
    OR (
        IF (New.'Terminal' IN ( SELECT T2.Name from Terminal T2 WHERE T2.IsFeeder = 1))
        AND 
        -- bullet point 4
    )