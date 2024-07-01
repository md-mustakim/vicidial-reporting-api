# Call Offer

SELECT count(uniqueid) as `Call Offer` FROM asterisk.vicidial_closer_log where call_date >= curdate()

---------------------------------------------------------------
---------------------------------------------------------------
# Call Answer

SELECT count(uniqueid) as `Answer Call` FROM asterisk.vicidial_closer_log where call_date >= curdate() AND user <> 'VDCL'

---------------------------------------------------------------
---------------------------------------------------------------

# AHT

SELECT TIME_FORMAT(SEC_TO_TIME(AVG(length_in_sec)), '%i:%s') AS AHT
FROM asterisk.vicidial_closer_log
WHERE call_date >= curdate()

----------------------------------------------------------------
----------------------------------------------------------------

# ABN%

----------------------------------------------------------------
----------------------------------------------------------------

# Agent login

SELECT COUNT(*) AS agent_login
FROM asterisk.vicidial_live_agents WHERE last_call_time>=curdate()

------------------------------------------------------------------
------------------------------------------------------------------

# Agent In Call

SELECT COUNT(*) AS agents_in_call
FROM asterisk.vicidial_live_agents
WHERE status IN ('INCALL', 'ONCALL')

----------------------------------------------------------------
----------------------------------------------------------------

# Call Waiting

SELECT COUNT(*) AS calls_in_waiting
FROM asterisk.vicidial_auto_calls
WHERE status IN ('CLOSER', 'LIVE');

----------------------------------------------------------------
----------------------------------------------------------------

# Agent Idle
----------------------------------------------------------------
----------------------------------------------------------------

# Agents In Break

SELECT COUNT(*) AS agents_on_break
FROM asterisk.vicidial_live_agents
WHERE status = 'PAUSED';

----------------------------------------------------------------
----------------------------------------------------------------

# Agents in Dispo

SELECT COUNT(*) AS agents_in_dispo
FROM asterisk.vicidial_live_agents
WHERE status = 'DISPO';

------------------------------------------------------------------
------------------------------------------------------------------

# User Live Data

SELECT a1.user, a2.full_name as Name, a1.status, a1.last_state_change as `Duration`, a1.pause_code as `Pause`,  a1.campaign_id
FROM asterisk.vicidial_live_agents AS a1
LEFT JOIN
asterisk.vicidial_users AS a2
on
a1.user = a2.user
GROUP BY user

---------------------------------------------------------------
---------------------------------------------------------------

# Answer Call Ratio

ACR % = Round ((Answer Call / Offer Call)*100, 2)

#Answer Call
SELECT count(uniqueid) as `Answer Call` FROM asterisk.vicidial_closer_log where campaign_id IN ('Haier_ING_BN', 'Haier_CSET_ING', 'Haier_ING_EN')
AND call_date >= curdate() AND user <> 'VDCL'

# Offer Call
SELECT count(uniqueid) as `call offer` FROM asterisk.vicidial_closer_log where campaign_id IN ('Haier_ING_BN', 'Haier_CSET_ING', 'Haier_ING_EN')
AND call_date >= curdate()

------------------------------------------------------------------
------------------------------------------------------------------

# Agent Wise Ticket Count

SELECT a1.user, a2.full_name as `Name`, a1.status, a1.calls_today FROM asterisk.vicidial_live_agents AS a1
LEFT JOIN
asterisk.vicidial_users AS a2
ON
a1.user = a2.user
GROUP BY user

------------------------------------------------------------------
------------------------------------------------------------------

------------------------------------------------------------------
------------------------------------------------------------------

# Call In Waiting for Agent

SELECT COUNT(*) AS calls_in_waiting
FROM asterisk.vicidial_auto_calls
WHERE status IN ('CLOSER', 'LIVE');

*********************************
SELECT COUNT(*) AS agents_in_waiting
FROM asterisk.vicidial_live_agents
WHERE status = 'READY';

------------------------------------------------------------------
------------------------------------------------------------------
------------------------------------------------------------------
------------------------------------------------------------------


